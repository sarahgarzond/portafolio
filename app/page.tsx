import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Education from "../components/education"
import Experience from "../components/experience"
import Clubs from "../components/clubs"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <div className="max-w-4xl mx-auto">
        <Hero />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <About />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <Projects />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <Skills />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <Education />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <Experience />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <Clubs />
      </div>
      <div className="w-full border-t border-black"></div>
      <div className="max-w-4xl mx-auto">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
