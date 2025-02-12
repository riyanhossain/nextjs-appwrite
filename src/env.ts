import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_APPWRITE_ENDPOINT: z.string().min(1),
    NEXT_PUBLIC_APPWRITE_DATABASE_ID: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_APPWRITE_PROJECT_ID:
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_DATABASE_ID:
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  },
});
