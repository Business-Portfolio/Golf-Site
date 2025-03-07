"use server"

import { createClient } from "@/lib/supabase/server";
import { z } from "zod"

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

    return { success: true }
}