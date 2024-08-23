import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const accessToken = await prisma.accessToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!accessToken || accessToken.expiresAt < new Date()) {
    return NextResponse.json(
      { error: "Token expired or invalid" },
      { status: 401 }
    );
  }

  return NextResponse.json({ user: accessToken.user });
}
