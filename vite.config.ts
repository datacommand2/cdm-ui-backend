import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
    server: {
        port: 8080,
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'express',
            appPath: './src/server.ts',
            exportName: 'viteNodeApp',
            tsCompiler: 'esbuild',
            swcOptions: {},
        }),
        // eslint 가 프로젝트의 모듈 경로를 올바르게 확인할 수 있게 해주는 플러그인
        viteTsconfigPaths(),
        // vite-plugin-checker는 eslint와 typescript를 동시에 사용할 수 있게 해준다.
        // 해당 플러그인을 사용하지 않으면 Typescript error를 감지할 수 없다.
        checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,js}"' } }),
    ],
    build: {
        outDir: 'build',
        target: 'esnext',
    },
    cacheDir: './.vite',
    // process.env에 MOCK_API 환경변수 추가.
    // 브라우저 Refresh, MOCK_API 변경 시 restart 필요없음.
    define: {
        'process.env': {}
    }
});
