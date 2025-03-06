"use server"
import { createClient } from "@/lib/supabase/server"
import { AuthData } from "@/types/types"
import { z } from "zod"

const signUpSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
})

export async function signup(data: AuthData) {
    const result = signUpSchema.safeParse(data)
    
    if (result.error) {
        return { success: false, error: result.error.errors[0].message }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: { firstName: data.firstName, lastName: data.lastName, isAdmin: false}
        }
    })

    if (error) {
        return { success: false, error: error.message}
    }

    return { success: true }
}