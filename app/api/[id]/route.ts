export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from "next/server";
import { data } from '../route'
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";

interface Params {
    params: {
        id: string
    }
}

export async function GET (request: NextRequest, { params }: Params) {
    const headersFunc = headers()
    const cookiesFunc = cookies()
    
    console.log(headersFunc.get('Authorization'))
    cookiesFunc.set('theme','dark')
    console.log(cookies().get('theme'))

    if (Number(params.id) > data.length) {
        redirect('/')
    }

    const getData = data.find(d => d.id === params.id)
    return NextResponse.json(getData, {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}

export async function PATCH (request: NextRequest, {params}: Params){
    const headersFunc = headers()
    const cookiesFunc = cookies()
    
    console.log(headersFunc.get('Authorization'))
    cookiesFunc.set('theme','dark')
    console.log(cookies().get('theme'))

    const body = await request.json()
    const { name } = body
    const index = data.findIndex(d => d.id === params.id)
    data[index].name = name

    return NextResponse.json(data[index], {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}

export async function DELETE (request: NextRequest, {params}: Params){
    const headersFunc = headers()
    const cookiesFunc = cookies()
    
    console.log(headersFunc.get('Authorization'))
    cookiesFunc.set('theme','dark')
    console.log(cookies().get('theme'))

    const index = data.findIndex(d => d.id === params.id)
    const deletedData = data[index]
    data.splice(index,1)

    return NextResponse.json(data, {
        headers: {
            "Content-Type": "application/json"
        },
        status: 202
    })
}