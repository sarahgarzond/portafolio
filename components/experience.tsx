"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

function Experience() {
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

  const experiences = [
    {
      company: "Toronto Asian Art Museum",
      position: "Software Engineer",
      period: "Apr 2024 – Sep 2024",
      location: "Toronto, Canada",
      type: "Full-time",
      achievements: [
        "Contributed to the development of an Android application in an Agile Scrum team, collaborating in sprint reviews and incorporating iterative feedback from stakeholders.",
        "Designed and implemented the search screen UI using XML and Java in Android Studio, ensuring usability through user-centered design and peer testing.",
        "Developed backend logic to enable dynamic artifact search and data retrieval, improving functionality and performance of the application.",
        "Supported quality assurance by testing features, documenting results, and aligning improvements with user requirements.",
      ],
      technologies: ["Android Studio", "Java", "XML", "Agile", "Scrum"],
      icon: <Building className="h-5 w-5" />,
    },
    {
      company: "University of Toronto - Department of Mathematics",
      position: "University Research Assistant",
      period: "May 2022 – August 2022",
      location: "Toronto, Canada",
      type: "Research",
      achievements: [
        "Investigated how learning undergraduate mathematics in a second language impacts students' problem-solving approaches.",
        "Conducted web scraping using Selenium to gather and preprocess large datasets from academic sources and educational forums.",
        "Applied statistical analysis to identify patterns in learning performance and language-related challenges.",
      ],
      technologies: ["Python", "Selenium", "Statistical Analysis", "Web Scraping", "Data Preprocessing"],
      icon: <Building className="h-5 w-5" />,
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{exp.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
