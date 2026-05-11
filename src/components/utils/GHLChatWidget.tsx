"use client";

import { useEffect } from "react";

/**
 * GoHighLevel Chat Widget Component
 * Embeds the GHL chat widget globally into the application.
 */
export const GHLChatWidget = () => {
  useEffect(() => {
    const widgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID;
    
    if (!widgetId) return;

    const script = document.createElement("script");
    script.src = `https://widgets.leadconnectorhq.com/loader.js`;
    script.setAttribute("data-resources-url", `https://widgets.leadconnectorhq.com/chat-widget/loader.js`);
    script.setAttribute("data-widget-id", widgetId);
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="leadconnectorhq.com"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};
