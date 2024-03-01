export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export const data = [{ name: "Name" }, { name: "Name 2" }];

export async function GET(): Promise<NextResponse<Data[]>> {
  const headersFunc = headers();
  const cookiesFunc = cookies();

  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const headersFunc = headers();
  const cookiesFunc = cookies();

  const postData = await request.json();
  data.push(postData);

  return NextResponse.json(postData, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
