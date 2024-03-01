export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { data } from "../route";
import { cookies, headers } from "next/headers";

interface Params {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const headersFunc = headers();
  const cookiesFunc = cookies();

  data.splice(
    data.findIndex((item) => item.name === params.id),
    1
  );
  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 202,
  });
}
