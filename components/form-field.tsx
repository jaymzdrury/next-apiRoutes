import { Data } from "@/types";

export default function FormField({
  func,
  data,
}: {
  func: (formData: FormData) => void;
  data?: Data;
}): JSX.Element {
  return (
    <form action={func}>
      <input
        name="name"
        type="text"
        placeholder={data ? data.name : undefined}
      />
      <button type="submit">{data ? "Delete" : "Post"}</button>
    </form>
  );
}
