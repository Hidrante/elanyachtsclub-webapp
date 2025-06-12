// En: vite.config.ts

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // <-- IMPORTAMOS EL PLUGIN DE REACT
import imagemin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    define: {
      // Esto está perfecto, lo dejamos como estaba
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      // Tu alias también está perfecto
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    plugins: [
      react(), // <-- AGREGAMOS EL PLUGIN DE REACT, ESENCIAL PARA EL DESARROLLO
      imagemin(),
    ],
    server: {
      // <-- ¡ACÁ ESTÁ NUESTRA MAGIA PARA LA CONEXIÓN!
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  };
});