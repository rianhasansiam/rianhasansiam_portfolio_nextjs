"use client"

import { useCallback, useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function ScrollEngine({ children }) {
  const progressRef = useRef(null)
  const scrollToSectionRef = useRef(() => {})
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    let isMounted = true
    let setupTimer = null
    let gsapContext = null
    const createdTriggers = []

    const setupScrollEngine = async () => {
      const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/ScrollToPlugin'),
      ])

      if (!isMounted) return

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

      gsapContext = gsap.context(() => {
        setupTimer = window.setTimeout(() => {
          const panels = gsap.utils.toArray('.stacked-panel')

          panels.forEach((panel, index) => {
            if (index === panels.length - 1) return

            const pinTrigger = ScrollTrigger.create({
              trigger: panel,
              start: 'bottom bottom',
              endTrigger: panels[index + 1],
              end: 'top top',
              pin: true,
              pinSpacing: false,
            })

            createdTriggers.push(pinTrigger)
          })

          panels.forEach((panel, index) => {
            if (index === 0) return

            const card = panel.querySelector('.panel-card')
            if (!card) return

            gsap.fromTo(card,
              {
                borderRadius: '48px 48px 0 0',
              },
              {
                borderRadius: '40px 40px 0 0',
                ease: 'none',
                scrollTrigger: {
                  trigger: panel,
                  start: 'top bottom',
                  end: 'top 20%',
                  scrub: 0.4,
                },
              }
            )
          })

          SECTIONS.forEach((section, index) => {
            const el = document.getElementById(section.id)
            if (!el) return

            const sectionTrigger = ScrollTrigger.create({
              trigger: el,
              start: 'top center',
              end: 'bottom center',
              onEnter: () => setActiveSection(index),
              onEnterBack: () => setActiveSection(index),
            })

            createdTriggers.push(sectionTrigger)
          })

          const progressBar = progressRef.current
          if (progressBar) {
            const progressTween = gsap.to(progressBar, {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: document.documentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3,
              },
            })

            if (progressTween.scrollTrigger) {
              createdTriggers.push(progressTween.scrollTrigger)
            }
          }

          ScrollTrigger.refresh()
        }, 600)
      })

      scrollToSectionRef.current = (sectionId) => {
        const el = document.getElementById(sectionId)
        if (!el) return

        gsap.to(window, {
          duration: 1,
          scrollTo: { y: el, offsetY: 0 },
          ease: 'power3.inOut',
        })
      }
    }

    setupScrollEngine()

    return () => {
      isMounted = false
      scrollToSectionRef.current = () => {}

      if (setupTimer) {
        window.clearTimeout(setupTimer)
      }

      createdTriggers.forEach((trigger) => trigger.kill())
      gsapContext?.revert()
    }
  }, [])

  const scrollTo = useCallback((sectionId) => {
    scrollToSectionRef.current(sectionId)
  }, [])

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />

      <nav className="side-nav" aria-label="Section navigation">
        {SECTIONS.map((section, index) => (
          <button
            key={section.id}
            className={`side-nav-dot ${activeSection === index ? 'active' : ''}`}
            data-label={section.label}
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </nav>

      {children}
    </>
  )
}
