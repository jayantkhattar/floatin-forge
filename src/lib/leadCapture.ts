/**
 * Sends a lead to the n8n webhook (which appends it to the master Google Sheet).
 *
 * Single source of truth for every form on the site. To swap the webhook URL,
 * update LEADS_WEBHOOK_URL below (or move it to an env var).
 */

const LEADS_WEBHOOK_URL = "https://n8n.floatin.in/webhook/floatin-leads";

export interface LeadPayload {
  /** Where the lead came from. e.g. "audit" or "tool:lead-cost-calculator" */
  source: string;
  name: string;
  email: string;
  phone: string;
  /** Free-form structured data — inputs, results, business context, etc. */
  data?: Record<string, unknown>;
}

export async function sendLead(payload: LeadPayload): Promise<void> {
  const body = {
    ...payload,
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    referrer: typeof document !== "undefined" ? document.referrer : undefined,
  };

  try {
    await fetch(LEADS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // Fire-and-forget — don't block UI on slow networks
      keepalive: true,
    });
  } catch (err) {
    // Log but never throw — lead capture should never break the user flow
    console.warn("[leadCapture] failed to POST lead:", err);
  }
}
