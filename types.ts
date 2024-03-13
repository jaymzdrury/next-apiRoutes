import { z } from "zod";

export const envSchema = z.object({ URL: z.string().url() }).parse(process.env);
export const dataSchema = z.object({ name: z.string().min(1) });
export type Data = z.infer<typeof dataSchema>;
