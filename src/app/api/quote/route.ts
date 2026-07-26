import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a real app, this would save to a database or send an email
    console.log("Quote request received:", { name, email, phone, service, message });

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We will get back to you within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
