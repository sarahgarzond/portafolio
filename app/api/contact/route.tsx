import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    try {
      // Check if Resend API key is available
      if (!process.env.RESEND_API_KEY) {
        console.log("RESEND_API_KEY not found. Email will be logged instead of sent.")
        console.log("Contact form submission:", {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString(),
        })
        return NextResponse.json(
          {
            message: "Message received! I'll get back to you soon via email.",
          },
          { status: 200 },
        )
      }

      // Import Resend dynamically to avoid errors if not installed
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <noreply@yourdomain.com>", // Replace with your verified domain
        to: ["harasgarzondiaz@gmail.com"], // Your email
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Sent from your portfolio website at ${new Date().toISOString()}</small></p>
        `,
        reply_to: email, // Allow replying directly to the sender
      })

      if (error) {
        console.error("Resend error:", error)
        // Fallback to logging if Resend fails
        console.log("Contact form submission (Resend failed):", {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString(),
        })
        return NextResponse.json(
          {
            message: "Message received! I'll get back to you soon.",
          },
          { status: 200 },
        )
      }

      console.log("Email sent successfully:", data)
      return NextResponse.json(
        {
          message: "Message sent successfully! I'll get back to you soon.",
        },
        { status: 200 },
      )
    } catch (resendError) {
      console.error("Resend import or execution error:", resendError)
      // Fallback to logging
      console.log("Contact form submission (fallback):", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json(
        {
          message: "Message received! I'll get back to you soon.",
        },
        { status: 200 },
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
