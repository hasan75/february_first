import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html', // Add all your pages here
            },
            output: {
                entryFileNames: '[name]/index.html', // Moves files into folders
            },
        },
    },
});
