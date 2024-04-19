import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // if i make this: its crashes app if ANY mistake
  // plugins: [react(), eslint()],
});
