'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 50, label: 'Projects', suffix: '+', icon: '🚀' },
  { number: 2, label: 'Years Exp.', suffix: '+', icon: '⏱' },
  { number: 15, label: 'Technologies', suffix: '+', icon: '⚡' },
  { number: 100, label: 'Satisfaction', suffix: '%', icon: '💯' },
]
const infoCards = [
  { title: 'Who I Am', icon: '👤', color: 'from-indigo-500/20 to-purple-500/20', text: "Hi, I'm Rian Hasan Siam, a passionate Software Engineering student at Daffodil International University. I specialize in full-stack web development with a focus on creating innovative, scalable solutions." },
  { title: 'What I Do', icon: '🎯', color: 'from-purple-500/20 to-pink-500/20', text: "I build modern web applications using cutting-edge technologies like React, Next.js, and Node.js. From frontend interfaces to backend APIs, I enjoy the entire development process." },
  { title: 'What Drives Me', icon: '💜', color: 'from-pink-500/20 to-rose-500/20', text: "My passion for technology and continuous learning drives me to stay updated with the latest trends. I believe in writing clean, maintainable code and creating user experiences that make a difference." },
]

const About = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const imageRef = useRef(null)
  const statsRef = useRef(null)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], { y: 80, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.from(imageRef.current, { x: -100, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: imageRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, { x: 100, opacity: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
      ScrollTrigger.create({
        trigger: statsRef.current, start: 'top 80%', once: true,
        onEnter: () => {
          stats.forEach((stat, index) => {
            gsap.to({}, { duration: 2, onUpdate: function () { const p = this.progress(); setCounters(prev => { const n = [...prev]; n[index] = Math.floor(stat.number * p); return n }) }, ease: 'power2.out' })
          })
        },
      })
      if (statsRef.current) gsap.from(statsRef.current.children, { y: 50, opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.8, ease: 'back.out(1.4)', scrollTrigger: { trigger: statsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="stacked-panel stacked-panel--about" ref={sectionRef}>
      <div className="panel-card py-32">
        <div className="ambient-orb ambient-orb-3" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">Get to know me</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">About <span className="gradient-text">Me</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <div ref={imageRef} className="relative mb-12">
                <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto lg:mx-0">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transform rotate-6 border border-white/5" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 transform -rotate-3 border border-white/5" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                    <Image src="/rianface.jpg" alt="Rian Hasan Siam" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070714]/60 to-transparent" />
                  </div>
                </div>
              </div>
              <div ref={statsRef} className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="glass-card p-5 text-center group hover:border-purple-500/20 transition-all duration-500 hover:-translate-y-1">
                    <span className="text-2xl mb-2 block">{s.icon}</span>
                    <div className="text-3xl font-bold gradient-text counter-value mb-1">{counters[i]}{s.suffix}</div>
                    <div className="text-xs text-white/30 font-medium tracking-wide uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {infoCards.map((card, i) => (
                <div key={i} ref={el => cardsRef.current[i] = el} className="glass-card p-7 group hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{card.icon}</span>
                      <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    </div>
                    <p className="text-white/40 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-10">Interests & Hobbies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{ icon: '💻', title: 'Programming', desc: 'Solving complex problems' }, { icon: '🎮', title: 'Gaming', desc: 'Strategic & open world' }, { icon: '📺', title: 'Sports', desc: 'Watching live matches' }, { icon: '⚽', title: 'Football', desc: 'The beautiful game' }].map((item, i) => (
                <div key={i} className="glass-card p-5 text-center hover:border-purple-500/20 transition-all duration-500 hover:-translate-y-2 group">
                  <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-white/30">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
