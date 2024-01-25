import { Metadata } from "next";
import { revalidatePath } from 'next/cache'
import { Data } from "./api/route";

const url = process.env.URL

export const metadata = (): Metadata => {
  return {
      title: 'Main Page',
  };
};

async function getData(){
  const res = await fetch(`${url}/api`)
  const data: Data[] = await res.json()

  if(!res.ok) throw new Error()

  return data
}

async function postData(formData: FormData){
  'use server'

  const res = await fetch(`${url}/api`, {
    method: 'POST',
    body: JSON.stringify({name: formData.get('name'), id: formData.get('id')})
  })
  const data: Data = await res.json()

  if(!res.ok) throw new Error()

  revalidatePath('/')
  console.log(data)
}

async function deleteData(formData: FormData){
  'use server'

  const res = await fetch(`${url}/api/${formData.get('id')}`, { method: 'DELETE' })
  const data: Data[] = await res.json()

  if(!res.ok) throw new Error()

  revalidatePath('/')
  console.log(data)
}

function FormField(
  {func, type, data}
  :
  {func: (formData: FormData) => void,
    type: string,
    data: Data
  }
): JSX.Element {

  return (
    <form action={func}>
      <input readOnly style={{display: 'none'}} name='id' type="text" value={data.id} />
      <input readOnly name='name' type="text" value={data.name} />
      <button type="submit">{type}</button>
    </form> 
  )
  
}

export default async function Home(): Promise<JSX.Element> {

  const data = await getData()
  const randomNumber = Math.floor(Math.random()*1000)

  return (
    <main>
      {data 
      ? 
      data.map(d => 
        <FormField key={d.id} func={deleteData} type="Delete" data={d} />
      ) 
      : 
      undefined}
      <FormField 
        func={postData} 
        type="Post" 
        data={{
          id: (randomNumber).toString(), 
          name: `'New Name ${randomNumber}`
        }} 
      />
    </main>
  )
  
}
