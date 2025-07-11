import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      
      config: {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Sora', 'sans-serif'],
              climate: ['"Climate Crisis"', 'cursive'],
            },
          },
        },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
