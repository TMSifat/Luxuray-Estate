import { NextResponse } from "next/server";

/**
 * GoHighLevel Webhook Handler
 * Receives data from GHL when a lead is updated, form submitted, or calendar event booked.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Log the incoming webhook for debugging
    console.log("GHL Webhook Received:", body);

    // Logic to handle different event types
    // Example: body.type === 'contact_created'
    
    // You can trigger internal notifications, update local DB, etc.
    
    return NextResponse.json({ success: true, message: "Webhook processed" });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
