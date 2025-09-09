"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="px-6">
      <div className="py-8">
        <div className="flex items-start gap-8 min-h-[280px]">
          <div className="flex-shrink-0">
            <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
            <Image
              src="/images/sarah-photo.jpg"
              alt="Sarah Garzon Diaz"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          <div className="border-l border-black -my-8 self-stretch"></div>

          <div className="flex-1 space-y-6">
            <div className="max-w-none pr-4">
              <p className="text-black leading-relaxed mb-4">
                I'm a passionate software engineer and data scientist currently pursuing my Bachelor's in Management and
                Data Science at the Technical University of Munich. With experience spanning from Android development to
                machine learning research, I thrive on solving complex problems through innovative technology solutions.
              </p>

              <p className="text-black leading-relaxed mb-6">
                My journey has taken me from the University of Toronto, where I achieved Dean's List recognition and
                received an International Scholar Award, to hands-on software engineering roles where I've contributed
                to real-world applications that impact users directly.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black">Location:</span>
                  <span className="text-black">Heilbronn, Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black">Education:</span>
                  <span className="text-black">Management & Data Science, TUM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black">Focus:</span>
                  <span className="text-black">Software Engineering & Data Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
