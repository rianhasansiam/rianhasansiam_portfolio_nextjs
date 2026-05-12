'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function ScrollEngine({ children }) {
  const containerRef = useRef(null)
  const progressRef = useRef(null)
  const cursorRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const sectionTriggersRef = useRef([])

  // Scroll progress bar
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return

    const st = gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })

    return () => {
      if (st.scrollTrigger) st.scrollTrigger.kill()
      st.kill()
    }
  }, [])

  // Track active section — delay to wait for dynamic imports
  useEffect(() => {
    const timer = setTimeout(() => {
      sectionTriggersRef.current.forEach(st => st.kill())
      sectionTriggersRef.current = []

      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id)
        if (!el) return

        const st = ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(i),
          onEnterBack: () => setActiveSection(i),
        })
        sectionTriggersRef.current.push(st)
      })
    }, 1500)

    return () => {
      clearTimeout(timer)
      sectionTriggersRef.current.forEach(st => st.kill())
    }
  }, [])

  // Cursor glow tracking
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // ScrollToPlugin
  useEffect(() => {
    import('gsap/ScrollToPlugin').then(({ ScrollToPlugin }) => {
      gsap.registerPlugin(ScrollToPlugin)
    })
  }, [])

  const scrollTo = useCallback((sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: el, offsetY: 0 },
        ease: 'power3.inOut',
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="noise-overlay">
      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        className="scroll-progress"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Side Navigation Dots */}
      <nav className="side-nav" aria-label="Section navigation">
        {SECTIONS.map((section, i) => (
          <button
            key={section.id}
            className={`side-nav-dot ${activeSection === i ? 'active' : ''}`}
            data-label={section.label}
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </nav>

      {/* Cursor Glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Content */}
      {children}
    </div>
  )
}
