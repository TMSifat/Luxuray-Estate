import { NextResponse } from "next/server";
import { ghlClient } from "@/lib/ghl";
import { supabase } from "@/lib/supabase";

/**
 * Unified Lead Submission Route
 * Saves lead data to both GoHighLevel and Supabase.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, message, propertyId } = data;

    // 1. Save to Supabase (Backend Storage)
    const { data: supabaseData, error: supabaseError } = await supabase
      .from("leads")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          message,
          property_id: propertyId,
        },
      ])
      .select();

    if (supabaseError) {
      console.error("Supabase Lead Storage Error:", supabaseError);
    }

    // 2. Sync to GoHighLevel CRM
    try {
      await ghlClient.createContact({
        firstName,
        lastName,
        email,
        phone,
        source: "Website Lead",
        tags: ["website-lead", propertyId ? `property-${propertyId}` : "general-inquiry"],
      });
    } catch (ghlError) {
      console.error("GHL Sync Error:", ghlError);
      // We don't fail the whole request if GHL fails, as we have it in Supabase
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      id: supabaseData?.[0]?.id,
    });
  } catch (error) {
    console.error("Lead Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
