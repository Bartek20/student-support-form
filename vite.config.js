/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/student-support-form/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
