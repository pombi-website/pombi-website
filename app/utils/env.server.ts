import { parseEnv } from 'znv';
import { z } from 'zod';

export const parsedEnv = parseEnv(process.env, {
  // For app
  NODE_ENV: z
    .enum([
      '',
      'development',
      'test',
      'preview',
      'staging',
      'production',
    ])
    .optional(),
  APP_URL: z
    .string()
    .url()
    .optional()
    .default('http://localhost:3000'),
  SESSION_SECRET: z.string().min(1),

  // For OAuth
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
});
