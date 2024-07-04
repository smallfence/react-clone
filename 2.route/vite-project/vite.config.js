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
  }
})
