const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const https = require('https');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const api = require('./utils/api');
const env = require('./config/index');
const HTTPS_PORT = 8443;

const options = {
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./private.crt'),
    ca: fs.readFileSync('./private.csr'),
};
const server = http.createServer(app);
const httpsServer = https.createServer(options, app);

const socketApi = require('./utils/socket');

// client에서 post 요청 시 몇몇 standard header 값들만 보이는데
// 아래처럼 추가해주면 원하는 헤더 값을 추가 가능
app.use(
    cors({
        exposedHeaders: ['x-tenant-id', 'x-authenticated-session'],
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// build 폴더에 존재하는 static 파일들을 사용
// __dirname : 파일명을 제외한 절대 경로
// path.join('/foo', '/bar') => /foo/bar

if (process.env?.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
}
// GET, POST, DELETE, PUT, PATCH 요청이 오면
// getDataFromApiServer 함수를 실행한다.

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/manual.pdf', function (req, res) {
    const file = path.resolve(__dirname, 'public/NerverStop_v1.0_Manual.pdf');
    res.sendFile(file);
});

app.get('*', async (req, res) => {
    res.send(await api.getDataFromApiServer(req, 'get', ''));
});
app.post('*', async (req, res) => {
    res.send(await api.getDataFromApiServer(req, 'post', req.body));
});
app.delete('*', async (req, res) => {
    res.send(await api.getDataFromApiServer(req, 'delete', req.body));
});
app.put('*', async (req, res) => {
    res.send(await api.getDataFromApiServer(req, 'put', req.body));
});
app.patch('*', async (req, res) => {
    res.send(await api.getDataFromApiServer(req, 'patch', req.body));
});

// 모든 HTTP 요청, 경로에 대해 index.html 을 보여준다.
app.use('*', (req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        res.send(express.static(path.join(__dirname, '../frontend/build/', 'index.html')));
    }
});

socketApi.io.attach(process.env?.NODE_ENV === 'production' ? httpsServer : server, {
    cors: {
        origin: '*',
        credentials: true,
    },
    transports: ['websocket'],
    path: '/socket.io',
});

server.listen(env.port, () => {
    console.log(`node server running ${env.port}`);
});

// Create an HTTPS server.
httpsServer.listen(HTTPS_PORT, () => {
    console.log(`8443 running`);
});
