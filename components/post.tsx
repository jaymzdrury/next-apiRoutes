'use client'
import { url } from "../app/page"

async function postData() {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: 'New Name', id: '3'})
    })
    const data = res.json()
    console.log(data)
    if(res.ok){
      alert('POST successful')
    } else {
      alert('DID NOT POST')
    }
  }

export async function Post(){
    return <button onClick={postData}>New Post</button>
}