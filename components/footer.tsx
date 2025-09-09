"use client"
import { Github, Linkedin, Mail } from "lucide-react"
import type React from "react"

export default function Footer() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Try to open default email client
    const mailtoLink =
      "mailto:harasgarzondiaz@gmail.com?subject=Hello%20Sarah&body=Hi%20Sarah,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."

    try {
      window.location.href = mailtoLink

      // Show fallback message after a short delay if email client doesn't open
      setTimeout(() => {
        const userConfirm = confirm(
          "If your email client didn't open, you can:\n\n" +
            "1. Copy this email: harasgarzondiaz@gmail.com\n" +
            "2. Or scroll up to use the contact form\n\n" +
            "Click OK to copy the email address to clipboard.",
        )

        if (userConfirm) {
          navigator.clipboard
            .writeText("harasgarzondiaz@gmail.com")
            .then(() => {
              alert("Email address copied to clipboard!")
            })
            .catch(() => {
              alert("Please copy this email manually: harasgarzondiaz@gmail.com")
            })
        }
      }, 1000)
    } catch (error) {
      // Fallback if mailto fails
      const userConfirm = confirm(
        "Email client not available. Would you like to:\n\n" +
          "1. Copy email address: harasgarzondiaz@gmail.com\n" +
          "2. Or scroll up to use the contact form\n\n" +
          "Click OK to copy the email address.",
      )

      if (userConfirm) {
        navigator.clipboard
          .writeText("harasgarzondiaz@gmail.com")
          .then(() => {
            alert("Email address copied to clipboard!")
          })
          .catch(() => {
            alert("Please copy this email manually: harasgarzondiaz@gmail.com")
          })
      }
    }
  }

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© 2024 Sarah Garzon Diaz. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sarahgarzond"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sarah-garzon-diaz-6b4ba42b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:harasgarzondiaz@gmail.com"
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, React, and Tailwind CSS. Designed with ❤️ in Germany.
          </p>
        </div>
      </div>
    </footer>
  )
}
