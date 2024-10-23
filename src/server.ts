import path from 'path';
import express from 'express';
import * as http from 'http';
import * as https from 'https';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as fs from 'fs';
import compression from 'compression';

import { getDataFromApiServer } from './utils/api';
import env from './config/index';
import { createApolloServers } from './utils/apolloServer';

export const app = express();
const HTTPS_PORT = 8443;

const options = {
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./private.crt'),
    ca: fs.readFileSync('./private.csr'),
};
export const server = http.createServer(app);
const httpsServer = https.createServer(options, app);

// client에서 post 요청 시 몇몇 standard header 값들만 보이는데
// 아래처럼 추가해주면 원하는 헤더 값을 추가 가능
export const corsOptions = {
    exposedHeaders: ['x-tenant-id', 'x-authenticated-session'],
};

app.use(cors(corsOptions));
// use compression
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));

// build 폴더에 존재하는 static 파일들을 사용
// path.resolve() : 파일명을 제외한 절대 경로
// path.join('/foo', '/bar') => /foo/bar

if (process.env?.NODE_ENV === 'development') {
    app.use(express.static(path.join(process.cwd(), '../frontend/build')));
}

// GET, POST, DELETE, PUT, PATCH 요청이 오면
// getDataFromApiServer 함수를 실행한다.

app.get('/favicon.ico', (req: any, res: any) => {
    res.sendStatus(200);
});

//
// create ApolloServers
// backup, cloud,
// openShift_cm, openShift_dr,
// openStack_cm, openStack_dr,
// replicator, storageManager
//
const apolloServers = await createApolloServers({
    server,
    corsOptions,
    app,
});

app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/manual.pdf', function (req: any, res: any) {
    const file = path.resolve(path.resolve(), 'public/NerverStop_OpenShift_Manual_v1.1.pdf');
    res.sendFile(file);
});

app.get('*', async (req: any, res: any) => {
    res.send(await getDataFromApiServer({ req, method: 'get' }));
});
app.post('*', async (req: any, res: any) => {
    res.send(await getDataFromApiServer({ req, method: 'post', body: req.body }));
});
app.delete('*', async (req: any, res: any) => {
    res.send(await getDataFromApiServer({ req, method: 'delete', body: req.body }));
});
app.put('*', async (req: any, res: any) => {
    res.send(await getDataFromApiServer({ req, method: 'put', body: req.body }));
});
app.patch('*', async (req: any, res: any) => {
    res.send(await getDataFromApiServer({ req, method: 'patch', body: req.body }));
});

// 모든 HTTP 요청, 경로에 대해 index.html 을 보여준다.
app.use('*', (req: any, res: any) => {
    if (process.env.NODE_ENV === 'development') {
        res.send(express.static(path.join(path.resolve(), '../frontend/build/', 'index.html')));
    }
});

// socketApi.io.attach(process.env?.NODE_ENV === 'production' ? httpsServer : server, {
//     cors: {
//         origin: '*',
//         credentials: true,
//     },
//     transports: ['websocket'],
//     path: '/socket.io',
// });

server.listen(env.port, () => {
    console.log(`node server running ${env.port}`);
});

// Create an HTTPS server.
httpsServer.listen(HTTPS_PORT, () => {
    console.log(`8443 running`);
});

if ((import.meta as any).hot) {
    (import.meta as any).hot.dispose(async () => {
        console.log('hot dispose');
        // first of all, stop the ApolloServers.
        apolloServers.forEach(async apolloServer => (await apolloServer).stop());
        // close the http servers
        server.close();
        httpsServer.close();
    });
}

export const viteNodeApp = app;
