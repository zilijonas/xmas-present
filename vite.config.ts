import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [react()],
    base: isProduction ? "/xmas-present/" : "/",
  };
});
