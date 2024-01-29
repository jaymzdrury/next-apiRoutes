import { Metadata } from "next";
import { deleteData, postData } from "@/actions/actions";
import { getData } from "@/utils/fetchRequest";
import FormField from "@/components/form-field";

export const metadata = (): Metadata => {
  return {
      title: 'Main Page',
  };
};

export default async function Home(): Promise<JSX.Element> {

  const data = await getData()
  const randomNumber = Math.floor(Math.random()*1000)
  const post = {name: `New Name ${randomNumber}`, id: (randomNumber).toString()}

  return (
    <main>
      {
      data 
      ? 
      data.map(d => 
        <FormField key={d.id} func={deleteData} type="Delete" data={d} />
      ) 
      : 
      undefined
      }
      <FormField func={postData} type="Post" data={post} />
    </main>
  )
  
}
