"use server";
import { get, post, remove } from "@/lib/db";
import { dataSchema } from "@/types";
import { revalidateTag } from "next/cache";

export async function getData() {
  const { error, data } = await get();
  if (error) throw new Error(error);
  return data;
}

export async function postData(formData: FormData) {
  const { name } = Object.fromEntries(formData);

  const { success } = dataSchema.safeParse({ name });

  if (!success) return { error: "invalid" };

  const { error } = await post(name);

  if (error) throw new Error(error);

  revalidateTag("data");
}

export async function deleteData(id: string) {
  const { success } = dataSchema.safeParse({ name: id });

  if (!success) return { error: "invalid" };

  const { error } = await remove(id);

  if (error) throw new Error(error);

  revalidateTag("data");
}
