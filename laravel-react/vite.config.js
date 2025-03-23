import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
        }),
        react(), // Make sure react plugin is properly loaded
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./resources/js"),
        },
    },
    server: {
        port: 5173,
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
    },
    // For serving on local environment
    base: "",

    css: {
        postcss: {
            plugins: [], // Empty plugins array for now
        },
    },
});
