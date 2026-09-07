import { NextResponse } from "next/server";
import corsHeaders from "./cors";

export function errorResponse(message, status = 400) {
  return NextResponse.json(
    {
      message: message,
    },
    {
      status: status,
      headers: corsHeaders,
    },
  );
}

export function successResponse(data, status = 200) {
  return NextResponse.json(data, {
    status: status,
    headers: corsHeaders,
  });
}