import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Listen on all addresses
    port: 8080,
    strictPort: false, // Try another port if 8080 is in use
    watch: {
      usePolling: true, // Enable for Windows systems
      interval: 100 // Reduce polling interval for faster updates
    },
    // Handle client-side routing
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
