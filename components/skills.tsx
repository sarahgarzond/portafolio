"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C/C++", "R", "SQL", "C#", "Swift", "Visual Basic"],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        "PyTorch",
        "Hugging Face",
        "Android Studio",
        "Power BI",
        "Git & GitHub",
        "VS Code",
        "Google Colab",
        "Jira",
        "SAP",
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        "Machine Learning",
        "NLP",
        "Data Analysis",
        "Statistical Analysis",
        "Data Visualization",
        "Web Scraping",
        "LLM Fine-Tuning",
      ],
    },
    {
      title: "Languages",
      skills: ["Spanish (Native)", "English (Native)", "German (Intermediate)"],
    },
    {
      title: "Business & Management",
      skills: [
        "Strategic Management",
        "Financial Analysis",
        "Project Management",
        "Agile Development",
        "Team Leadership",
        "Problem Solving",
      ],
    },
    {
      title: "Relevant Coursework",
      skills: ["Calculus I&II", "Linear Algebra I&II", "Discrete Math", "Probability", "Statistics"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-12 px-2 sm:px-4 lg:px-8">
      <h2 className="text-3xl font-bold text-black mb-8">Skills & Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className={`hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
              isVisible ? "animate-in slide-in-from-bottom-4" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="px-3 py-2 flex flex-col">
              <h3 className="text-sm font-semibold text-black mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-1 text-xs text-gray-700">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="whitespace-nowrap">
                    {skill}
                    {skillIndex < category.skills.length - 1 && <span className="font-bold text-black ml-1">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
