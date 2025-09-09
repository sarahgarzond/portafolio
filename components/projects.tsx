"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Automated Apartment Scraper & Email Reminder",
      description:
        "A comprehensive automation solution that scrapes apartment listings and sends intelligent email reminders to users.",
      technologies: ["Java", "Python", "BeautifulSoup", "SQL", "Gmail API"],
    },
    {
      title: "Student Performance Analytics Dashboard",
      description:
        "Interactive dashboards built with Power BI and Excel to track and analyze student performance metrics.",
      technologies: ["Python", "Power BI", "SQL", "Excel"],
    },
    {
      title: "Medical Literature Classifier",
      description:
        "Advanced machine learning system for classifying medical literature using PubMedBERT and transformer models.",
      technologies: ["Python", "PyTorch", "Hugging Face", "PubMedBERT", "scikit-learn"],
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-16 px-6">
      <h2 className="text-3xl font-bold text-black mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-black leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <button className="text-black hover:underline">View Project →</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
