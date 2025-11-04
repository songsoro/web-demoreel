import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()]
  // GitHub Pages로 배포할 땐 base: "/web-demoreel/" 추가
});
