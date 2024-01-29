'use server'
import { revalidateTag } from "next/cache"

const url = process.env.URL

export async function postData(formData: FormData){
    const res = await fetch(`${url}/api`, {
      method: 'POST',
      body: JSON.stringify({name: formData.get('name'), id: formData.get('id')})
    })
    const data: Data = await res.json()
  
    if(!res.ok) throw new Error()
  
    revalidateTag('data')
    console.log(data)
  }
  
  export async function deleteData(formData: FormData){
    'use server'
  
    const res = await fetch(`${url}/api/${formData.get('id')}`, { method: 'DELETE' })
    const data: Data[] = await res.json()
  
    if(!res.ok) throw new Error()
  
    revalidateTag('data')
    console.log(data)
  }