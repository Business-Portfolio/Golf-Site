"use server"

import { createClient } from "@/lib/supabase/server";
import { z } from "zod"
import { sendEmail } from "@/lib/email/email";

const waitlistSchema = z.object({
    email: z.string().email("Please enter your email address")
})

export async function addToWaitlist(email: string) {
    const result = waitlistSchema.safeParse({ email })

    if (result.error) {
        return { success: false, error: result.error.errors[0].message }
    }

    const supabase = await createClient()

    const { error } = await supabase
        .from('waitlist')
        .insert({ email })
    
    if (error) {
        return { success: false, error: error.message}
    }

    await sendEmail(
        email,
        "You're on the NextLevelGolf Waitlist! 🎉",
        `
          <h2>Thanks for joining the NextLevelGolf waitlist! ⛳</h2>
          <p>We're excited to have you on board. Stay tuned for exclusive updates and early access.</p>
          <p>In the meantime, follow us on social media for the latest golf tips and insights!</p>
          <br>
          <p>- The NextLevelGolf Team</p>
        `
    )

    return { success: true }
}