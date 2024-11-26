import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'src/styled-system',
  preflight: true,
  theme: {
    extend: {
      tokens: {
        fonts: {
          cal: { value: 'var(--font-cal-sans), sans-serif' },
          geist: { value: 'var(--font-geist-sans), sans-serif' },
        },
      },
    },
  },
});
