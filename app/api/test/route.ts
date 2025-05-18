import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/helper/sendVerificationmail";

export async function GET() {
  const res = await sendVerificationEmail("your_email@example.com", "Test User", "123456");
  return NextResponse.json(res);
}
