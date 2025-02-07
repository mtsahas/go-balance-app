import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// add things you might want to work with, like Tailwing or ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
