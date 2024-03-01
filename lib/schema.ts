import { z } from "zod";

export const Schema = z.object({
  name: z.string().min(1, { message: "name is required" }),
});
