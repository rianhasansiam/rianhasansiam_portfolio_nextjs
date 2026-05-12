'use client'

import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

// Dynamic imports for scroll-heavy sections (code-split for perf)
const ScrollEngine = dynamic(() => import('../components/ScrollEngine'), { ssr: false })
const About = dynamic(() => import('../components/About'), { ssr: false })
const Skills = dynamic(() => import('../components/Skills'), { ssr: false })
const Projects = dynamic(() => import('../components/Projects'), { ssr: false })
const Education = dynamic(() => import('../components/Education'), { ssr: false })
const Contact = dynamic(() => import('../components/Contact'), { ssr: false })

export default function Home() {
  return (
    <ScrollEngine>
      <header>
        <Navbar />
      </header>
      <main role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </ScrollEngine>
  )
}
