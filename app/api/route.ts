export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from "next/server"
import { headers, cookies } from "next/headers"

export interface Data {
    id: string,
    name: string
}

export const data: Data[] = [
    {name: 'Name', id: '0'},
    {name: 'Name 2', id: '1'}
]

export async function GET(): Promise<NextResponse<Data[]>> {
    const headersFunc = headers()
    const cookiesFunc = cookies()

    console.log(headersFunc.get('Authorization'))
    cookiesFunc.set('theme','dark')
    console.log(cookies().get('theme'))

    return NextResponse.json(data, {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}

//GET Query '/api?query=[value]'
// export async function GET(request: NextRequest){
//     const headersFunc = headers()
//     const cookiesFunc = cookies()
    
//     console.log(headersFunc.get('Authorization'))
//     cookiesFunc.set('theme','dark')
//     console.log(cookies().get('theme'))

//     const searchParams = request.nextUrl.searchParams
//     const q = searchParams.get('query')
//     const filteredData = q ? data.filter(d => d.name.includes(q)) : data

//     return NextResponse.json(filteredData, {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         status: 200
//     })
// }

export async function POST(request: NextRequest){
    const headersFunc = headers()
    const cookiesFunc = cookies()
    
    console.log(headersFunc.get('Authorization'))
    cookiesFunc.set('theme','dark')
    console.log(cookies().get('theme'))

    const postData = await request.json()
    data.push(postData)

    return NextResponse.json(postData, {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}