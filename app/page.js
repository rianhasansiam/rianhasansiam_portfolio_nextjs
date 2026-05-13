import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ScrollEngine from '@/components/ScrollEngine'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      {/* Navbar OUTSIDE ScrollEngine so GSAP pin stacking contexts don't trap it */}
      <Navbar />

      <ScrollEngine>
        <main role="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </ScrollEngine>
    </>
  )
}
