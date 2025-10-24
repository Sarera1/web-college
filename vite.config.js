import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import handlebars from 'vite-plugin-handlebars';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// Налаштування __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        handlebars({
            // Шлях до ваших partials
            partialDirectory: resolve(__dirname, 'src', 'partials'),
            // Глобальні змінні
            context: {
                siteName: "Лабораторна № 6",
                labName: "Лабораторна № 6"
            }
        }),
    ],
    build: {
        rollupOptions: {
            // Точки входу для Multi-Page App
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contacts: resolve(__dirname, 'contacts.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});