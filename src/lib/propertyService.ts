import { supabase } from "./supabase";
import { properties as staticProperties, Property } from "@/data/properties";

export const propertyService = {
  async getAll(): Promise<Property[]> {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      if (error || !data || data.length === 0) {
        console.warn("Supabase properties fetch failed or empty, using static data.");
        return staticProperties;
      }

      return data as Property[];
    } catch (err) {
      console.error("Property Service Error:", err);
      return staticProperties;
    }
  },

  async getById(id: string): Promise<Property | null> {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        console.warn(`Supabase property ${id} fetch failed, using static data.`);
        return staticProperties.find(p => p.id === id) || null;
      }

      return data as Property;
    } catch (err) {
      console.error("Property Service Error:", err);
      return staticProperties.find(p => p.id === id) || null;
    }
  }
};
