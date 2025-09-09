"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, BookOpen } from "lucide-react"

function Education() {
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

  const education = [
    {
      institution: "Technical University of Munich",
      degree: "Bachelor of Science in Management and Data Science",
      period: "Expected: Nov 2027",
      location: "Munich, Germany",
      courses: ["Accounting", "Family Enterprise", "Programming"],
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      institution: "University of Toronto",
      degree: "Bachelor of Science in Machine Learning and Data Science",
      period: "Sep 2023 - Sep 2024",
      location: "Toronto, Canada",
      gpa: "3.5 / 4.0",
      awards: ["Dean's List Fall and Winter Semesters", "International Scholar Award ($125,000 CAD over 5 years)"],
      courses: [
        "Introduction to Data Science (R)",
        "Computer Science I & II (Python and C)",
        "Software Design",
        "Business & Management",
        "Calculus I&II, Linear Algebra I&II, Discrete Math, Probability, Statistics",
      ],
      icon: <Award className="h-5 w-5" />,
    },
    {
      institution: "University of Antioquia",
      degree: "Bachelor of Science in Software Engineering",
      period: "Expected: June 2028",
      location: "Online",
      courses: [
        "Software Engineering Principles",
        "Cloud Computing",
        "Data Structures and Algorithms (C++)",
        "Artificial Intelligence (Python)",
        "Web Development (JavaScript)",
      ],
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{edu.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{edu.institution}</CardTitle>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <p>{edu.location}</p>
                      {edu.gpa && <p className="font-medium">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {edu.awards && (
                    <div>
                      <h4 className="font-medium mb-2 text-black">Honours and Awards:</h4>
                      <ul className="space-y-1">
                        {edu.awards.map((award, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {course}
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

export default Education
