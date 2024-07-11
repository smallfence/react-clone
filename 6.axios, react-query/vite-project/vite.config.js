import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";

// 4. 경로 alias 설정
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "!@#":path.resolve(__dirname,"./src")
      // 위 코드는 이것과 같은거임. "!@#":"C:/zdhwon/01개인_04사이드,클론,토이프로젝트/02클론프로젝트/react/1.프로젝트생성/vite-project/src"
    }
  },
  server: {
    port: 3000,
    proxy: {
      // '/wowow'로 시작하는 요청을 프록시 처리합니다.
      '/wowow': {
        target: 'https://525a1922-2574-42f5-9692-3b0eaa739531.mock.pstmn.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wowow/, '')
      }
    }
  }
})
