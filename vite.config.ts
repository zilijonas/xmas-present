import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());
  const isProduction = mode === "production";

  return {
    plugins: [react()],
    base: isProduction ? "/xmas-present/" : "/",
  };
});
