import tsConfig from '@dephub/eslint-ts';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...tsConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'safeguard/no-raw-error': 'off',
    },
  },
]);
