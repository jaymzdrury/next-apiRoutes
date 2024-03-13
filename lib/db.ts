import { Data, envSchema } from "@/types";

const url = `${envSchema.URL}/api`;

export async function get() {
  try {
    const res = await fetch(url, { next: { tags: ["data"] } });
    const data = await res.json();
    return { error: !res.ok ? data.message : null, data: data as Data[] };
  } catch (error) {
    return { error: "Failed to create" };
  }
}

export async function post(name: FormDataEntryValue) {
  const parse = JSON.stringify({ name });
  try {
    const res = await fetch(url, { method: "POST", body: parse });
    const data = await res.json();
    return { error: !res.ok ? data.message : null };
  } catch (error) {
    return { error: "Failed to post" };
  }
}

export async function remove(name: string) {
  try {
    const res = await fetch(url + `/${name}`, { method: "DELETE" });
    const data = await res.json();
    return { error: !res.ok ? data.message : null };
  } catch (error) {
    return { error: "Failed to delete" };
  }
}
