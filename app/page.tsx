import { Metadata } from "next";
import { deleteData, postData, getData } from "@/actions/actions";
import FormField from "@/components/form-field";

export const metadata = (): Metadata => {
  return {
    title: "Main Page",
  };
};

export default async function Home(): Promise<JSX.Element> {
  const data: Data[] = await getData();

  return (
    <main>
      {data
        ? data.map((d) => (
            <FormField
              key={d.name}
              func={deleteData.bind(null, d.name)}
              data={d}
            />
          ))
        : undefined}
      <FormField func={postData} />
    </main>
  );
}
