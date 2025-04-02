import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.JPG'],
	plugins: [
		react(),
		imagetools(),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
		}),
		compression({
			algorithm: 'gzip',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure .jsx is recognized
	},
	base: '/charan-epuri.dev',
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true, // Remove console logs in production
			},
		},
	},
});
