import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY)

export async function sendEmail(to: string, subject: string, html: string) {
    try {
        const response = await resend.emails.send({
            from: "Andy from NextLevelGolf <noreply@nextlevelgolf.net>",
            to,
            subject,
            html,
        })

        return { success: true, response }
    } catch (error) {
        console.error("Resend email error: ", error)
        return { success: false, error}
    }
}