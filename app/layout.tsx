import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sarah Garzon Diaz - Software Engineer & Data Scientist",
  description:
    "Professional portfolio of Sarah Garzon Diaz, showcasing expertise in software engineering, data science, and machine learning.",
  keywords: ["Sarah Garzon Diaz", "Software Engineer", "Data Scientist", "Machine Learning", "Portfolio"],
  authors: [{ name: "Sarah Garzon Diaz" }],
  openGraph: {
    title: "Sarah Garzon Diaz - Software Engineer & Data Scientist",
    description:
      "Professional portfolio showcasing expertise in software engineering, data science, and machine learning.",
    url: "https://sarahgarzondiaz.com",
    siteName: "Sarah Garzon Diaz Portfolio",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
