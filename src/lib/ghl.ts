/**
 * GoHighLevel API Utility
 * Used for CRM integration, lead creation, and automation triggers.
 */

const GHL_API_BASE = "https://services.leadconnectorhq.com";

interface GHLContactPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  tags?: string[];
  customFields?: Record<string, any>;
  source?: string;
}

export const ghlClient = {
  /**
   * Create or update a contact in GHL CRM
   */
  async createContact(payload: GHLContactPayload) {
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.warn("GHL API Key or Location ID missing");
      return null;
    }

    try {
      const response = await fetch(`${GHL_API_BASE}/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "Version": "2021-04-15",
        },
        body: JSON.stringify({
          ...payload,
          locationId,
        }),
      });

      return await response.json();
    } catch (error) {
      console.error("GHL Create Contact Error:", error);
      throw error;
    }
  },

  /**
   * Trigger a workflow by adding a tag or custom field
   */
  async triggerAutomation(contactId: string, tag: string) {
    const apiKey = process.env.GHL_API_KEY;
    
    try {
      const response = await fetch(`${GHL_API_BASE}/contacts/${contactId}/tags`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "Version": "2021-04-15",
        },
        body: JSON.stringify({ tags: [tag] }),
      });

      return await response.json();
    } catch (error) {
      console.error("GHL Trigger Automation Error:", error);
      throw error;
    }
  }
};
