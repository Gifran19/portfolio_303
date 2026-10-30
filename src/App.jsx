import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Currently from './components/Currently'
import ProfessionalEnglish from './components/ProfessionalEnglish'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded focus:bg-olive focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Currently />
        <ProfessionalEnglish />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

