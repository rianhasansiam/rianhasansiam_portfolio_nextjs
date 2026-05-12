'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaDownload } from 'react-icons/fa'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => null,
})

const Hero = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const socialRef = useRef(null)
  const imageRef = useRef(null)
  const scrollHintRef = useRef(null)

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rianhasansiam', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rian-hasan-siam/', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/rianhasan1971', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rian_hasan_siam/', label: 'Instagram' },
    { icon: FaTelegram, url: 'https://t.me/rianhasansiam', label: 'Telegram' },
  ]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Rian_Hasan_Siam_CV.pdf'
    link.download = 'Rian_Hasan_Siam_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Entrance animations
      tl.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
      .from(subtitleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
      }, '-=0.7')
      .from(descRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from(ctaRef.current?.children, {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      }, '-=0.4')
      .from(socialRef.current?.children, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      }, '-=0.3')
      .from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.4)',
      }, '-=1')
      .from(scrollHintRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
      }, '-=0.3')

      // Unified scroll-scrubbed exit timeline (reverses on scroll up)
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 1,
        },
      })

      exitTl
        .to(headingRef.current, { y: -120, opacity: 0 }, 0)
        .to(subtitleRef.current, { y: -80, opacity: 0 }, 0.05)
        .to(descRef.current, { y: -60, opacity: 0 }, 0.1)
        .to(ctaRef.current, { y: -50, opacity: 0 }, 0.12)
        .to(socialRef.current, { y: -40, opacity: 0 }, 0.14)
        .to(imageRef.current, { scale: 0.9, opacity: 0 }, 0)
        .to(scrollHintRef.current, { opacity: 0 }, 0)

      // Floating animation on a CHILD inside image wrapper (no conflict with scrub)
      if (imageRef.current?.querySelector('.profile-img-inner')) {
        gsap.to(imageRef.current.querySelector('.profile-img-inner'), {
          y: 15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      // Scroll hint bounce
      gsap.to(scrollHintRef.current, {
        y: 12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Typewriter effect
  useEffect(() => {
    const roles = ['Full Stack Developer', 'React Specialist', 'Next.js Expert', 'UI/UX Enthusiast']
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    const el = subtitleRef.current

    if (!el) return

    const type = () => {
      const current = roles[roleIndex]

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1)
        charIndex--
      } else {
        el.textContent = current.substring(0, charIndex + 1)
        charIndex++
      }

      let speed = isDeleting ? 40 : 80

      if (!isDeleting && charIndex === current.length) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        speed = 400
      }

      setTimeout(type, speed)
    }

    const timer = setTimeout(type, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="scroll-panel relative"
      style={{ minHeight: '100vh' }}
    >
      {/* Spline 3D Background */}
      <SplineScene />

      {/* Ambient Orbs */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 via-[#050510]/20 to-[#050510] z-[1]" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen py-24 gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Social Links */}
            <div ref={socialRef} className="flex justify-center lg:justify-start gap-5 mb-8">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-400 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Main Heading */}
            <h1 ref={headingRef} className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
              <span className="block text-white/90">Rian Hasan</span>
              <span className="block gradient-text mt-2">Siam</span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl lg:text-3xl font-light text-white/40 tracking-wide">{'{ '}</span>
              <span
                ref={subtitleRef}
                className="text-xl md:text-2xl lg:text-3xl font-medium gradient-text-blue mx-2"
              >
                Full Stack Developer
              </span>
              <span className="text-xl md:text-2xl lg:text-3xl font-light text-white/40 tracking-wide inline-block animate-pulse">{' }'}</span>
            </div>

            {/* Description */}
            <p ref={descRef} className="text-base md:text-lg text-white/40 mb-10 max-w-xl leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies.
              I build scalable applications that deliver exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={handleDownload} className="btn-primary flex items-center gap-2 group">
                <FaDownload className="group-hover:animate-bounce" size={14} />
                Download CV
              </button>
              <a href="#contact" className="btn-secondary text-center">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end" ref={imageRef}>
            <div className="profile-img-inner relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl scale-110" />
              
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.06] scale-[1.15]" />
              <div className="absolute inset-0 rounded-full border border-white/[0.03] scale-[1.3]" />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/10">
                <Image
                  src="/rianface.jpg"
                  alt="Rian Hasan Siam"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  )
}

export default Hero
