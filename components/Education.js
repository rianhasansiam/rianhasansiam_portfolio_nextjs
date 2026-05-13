'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const educationData = [
  { degree: 'B.Sc. in Software Engineering', institution: 'Daffodil International University', duration: '2025 - Present', location: 'Savar, Dhaka', highlights: ['Web Development','Software Architecture','Database Management','DSA'], color: 'from-indigo-500 to-purple-600', icon: 'https://img.icons8.com/?size=100&id=109679&format=png&color=000000' },
  { degree: 'Higher Secondary Certificate (HSC)', institution: 'BCIC College', duration: '2019 - 2021', location: 'Mirpur-1, Dhaka', highlights: ['Science Group','CS Fundamentals','1st place programming'], color: 'from-purple-500 to-pink-600', icon: 'https://img.icons8.com/?size=100&id=EdByclgjacJf&format=png&color=000000' },
  { degree: 'Secondary School Certificate (SSC)', institution: 'BCIC School', duration: '2011 - 2019', location: 'Mirpur-1, Dhaka', highlights: ['Science Group','Mathematics & Physics'], color: 'from-cyan-500 to-indigo-600', icon: 'https://img.icons8.com/?size=100&id=114259&format=png&color=000000' },
]

const Education = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } })
      gsap.fromTo(lineRef.current, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom 80%', scrub: 1 } })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, { x: i % 2 === 0 ? -80 : 80, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" className="stacked-panel stacked-panel--education" ref={sectionRef}>
      <div className="panel-card py-32">
        <div className="ambient-orb ambient-orb-3" style={{ top: '10%', left: '60%' }} />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">My journey</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Education & <span className="gradient-text">Learning</span></h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.04] -translate-x-1/2 hidden md:block" />
            <div ref={lineRef} className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-indigo-500 to-purple-600 -translate-x-1/2 hidden md:block origin-top" style={{ height: '100%' }} />
            {educationData.map((item, i) => (
              <div key={i} ref={el => cardsRef.current[i] = el} className={`relative flex items-center mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border-[3px] border-[#070714] z-10 hidden md:block shadow-lg shadow-indigo-500/30" />
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="glass-card p-7 group hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <Image src={item.icon} alt="education icon" width={36} height={36} unoptimized className="mb-4" />
                      <h3 className="text-lg font-bold text-white mb-1">{item.degree}</h3>
                      <div className="flex flex-wrap gap-3 mb-3 text-xs text-white/30"><span>📅 {item.duration}</span><span>📍 {item.location}</span></div>
                      <h4 className="text-sm font-semibold text-purple-400/80 mb-3">{item.institution}</h4>
                      <ul className="space-y-1.5">{item.highlights.map((h, j) => (<li key={j} className="text-xs text-white/30 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />{h}</li>))}</ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto glass-card p-8 text-center mt-8">
            <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
            <p className="text-white/30 text-sm mb-6">Beyond formal education, I expand my knowledge through online courses, workshops, and hands-on projects.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Modern Web Dev','Backend with Node.js','Mobile Apps','UI/UX Design','Problem-Solving'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 text-white/70 rounded-full text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Education
