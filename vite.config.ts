import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium-next";

export default defineConfig({
    plugins: [react(), cesium()],
    base: "/temporal-globe/",
});
