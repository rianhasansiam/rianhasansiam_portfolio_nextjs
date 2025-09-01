'use client'

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      offset: 100,
    })
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen" role="main">
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
