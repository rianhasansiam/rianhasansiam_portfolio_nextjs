'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  const subtitleRef = useRef(null)
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

  // Gentle float + scroll hint bounce only
  useEffect(() => {
    gsap.to('.profile-img-inner', { y: 10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    if (scrollHintRef.current) {
      gsap.to(scrollHintRef.current, { y: 8, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }
  }, [])

  // Typewriter
  useEffect(() => {
    const roles = ['Full Stack Developer', 'React Specialist', 'Next.js Expert', 'UI/UX Enthusiast']
    let roleIndex = 0, charIndex = 0, isDeleting = false
    const el = subtitleRef.current
    if (!el) return
    const type = () => {
      const current = roles[roleIndex]
      if (isDeleting) { el.textContent = current.substring(0, charIndex - 1); charIndex-- }
      else { el.textContent = current.substring(0, charIndex + 1); charIndex++ }
      let speed = isDeleting ? 40 : 80
      if (!isDeleting && charIndex === current.length) { speed = 2000; isDeleting = true }
      else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; speed = 400 }
      setTimeout(type, speed)
    }
    const timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="stacked-panel stacked-panel--hero">
      <div className="panel-card">
        {/* Lightweight CSS background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="ambient-orb ambient-orb-1" style={{ top: '-10%', left: '-5%' }} />
          <div className="ambient-orb ambient-orb-2" style={{ bottom: '-5%', right: '-5%' }} />
          <div className="ambient-orb ambient-orb-3" style={{ top: '40%', right: '20%' }} />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)',
          }} />
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen py-24 gap-8">
            {/* Left Content — all visible by default */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-4 mb-8">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1" aria-label={s.label}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
                <span className="block text-white/90">Rian Hasan</span>
                <span className="block gradient-text mt-2">Siam</span>
              </h1>

              <div className="mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl lg:text-3xl font-light text-white/40">{'{ '}</span>
                <span ref={subtitleRef} className="text-xl md:text-2xl lg:text-3xl font-medium gradient-text-blue mx-2">Full Stack Developer</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-light text-white/40 animate-pulse">{' }'}</span>
              </div>

              <p className="text-base md:text-lg text-white/40 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Passionate about creating innovative web solutions with modern technologies. I build scalable applications that deliver exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button onClick={handleDownload} className="btn-primary flex items-center gap-2 group">
                  <FaDownload className="group-hover:animate-bounce" size={14} /> Download CV
                </button>
                <a href="#contact" className="btn-secondary text-center">Get In Touch</a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="profile-img-inner relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/8 to-pink-500/15 scale-110" />
                <div className="absolute inset-0 rounded-full border border-white/[0.06] scale-[1.15]" />
                <div className="absolute inset-0 rounded-full border border-white/[0.03] scale-[1.3]" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/10">
                  <Image src="/rianface.jpg" alt="Rian Hasan Siam" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div ref={scrollHintRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
