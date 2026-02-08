import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    try {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
    } catch {
      // Optional dependency: skip when not installed (e.g., CI/build environments).
    }
  }

  return {
  server: {
    host: "::",
    // Prefer an env var when present; otherwise default to Vite's usual 5173.
    port: Number(process.env.PORT) || 5175,
  },
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
