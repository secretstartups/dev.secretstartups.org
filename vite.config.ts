import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ['.'], // 👈 Allow access to all files from project root
    },
  },
  plugins: [
    react(),
  ],
  define: {
    'import.meta.env.DATABASE_URL': JSON.stringify(process.env.VITE_DATABASE_URL)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
}));
