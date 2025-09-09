"use client"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import type React from "react"

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Sarah_Garzon_Diaz_CV.pdf"
    link.click()
  }

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
            "2. Or scroll down to use the contact form\n\n" +
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
          "2. Or scroll down to use the contact form\n\n" +
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
    <section className="py-12 text-center">
      <p className="text-xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
        Hi, my name is Sarah Garzon Diaz. I am a Management and Data Science student at TUM with a strong tech
        background. I like to create innovative products and solutions that have real impact.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
        <button
          onClick={handleDownloadResume}
          className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
        >
          <Download className="h-4 w-4 mr-2 inline" />
          Download CV
        </button>
        <a
          href="#contact"
          className="px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
        >
          Get In Touch
        </a>
      </div>

      <div className="flex items-center justify-center gap-8">
        <a
          href="https://github.com/sarahgarzond"
          target="_blank"
          rel="noopener noreferrer"
          className="simple-link flex items-center gap-2"
        >
          <Github className="h-5 w-5" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sarah-garzon-diaz-6b4ba42b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="simple-link flex items-center gap-2"
        >
          <Linkedin className="h-5 w-5" />
          LinkedIn
        </a>
        <a
          href="mailto:harasgarzondiaz@gmail.com"
          onClick={handleEmailClick}
          className="simple-link flex items-center gap-2"
        >
          <Mail className="h-5 w-5" />
          Email
        </a>
      </div>
    </section>
  )
}
