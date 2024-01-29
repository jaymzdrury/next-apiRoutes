export async function getData(){
    const res = await fetch(`${process.env.URL}/api`, {
        next: {
            tags: ['data']
        }
    })
    const data: Data[] = await res.json()
  
    if(!res.ok) throw new Error()
  
    return data
}