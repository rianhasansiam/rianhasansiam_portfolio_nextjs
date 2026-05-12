'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Eye, X } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: 'DigiCam Market', description: 'Full-stack e-commerce with auth, real-time chat, admin dashboard.', longDescription: 'Modern e-commerce with Next.js 15, NextAuth, Redux Toolkit, WebSocket chat, admin dashboard, coupon system, and advanced security.', image: '/digiCamCoverPic.png', technologies: ['Next.js','React','MongoDB','NextAuth','Redux','Socket.io','Tailwind'], liveUrl: 'https://digicammarket.com', githubUrl: 'https://github.com/rianhasansiam/digicam', featured: true },
  { id: 2, title: 'Sahaba Store', description: 'Islamic e-commerce with Stripe payments and product catalog.', image: '/sahaba-store.png', technologies: ['React','Node.js','Express.js','MongoDB','Stripe','Tailwind'], liveUrl: 'https://sahaba-store.vercel.app', githubUrl: 'https://github.com/rianhasansiam/sahaba_store', featured: true },
  { id: 3, title: 'Scholarship Hub', description: 'Scholarship management with search, tracking, and analytics.', image: '/scholarshiHUb.png', technologies: ['React','Express.js','MongoDB','JWT','Recharts','Firebase'], liveUrl: 'https://assignment-12-b3c0e.web.app', githubUrl: 'https://github.com/rianhasansiam/ScholarShip_Hub', featured: true },
  { id: 4, title: 'COZYSTAY Hotel', description: 'Hotel booking with room listings and availability checking.', image: '/assignment11.png', technologies: ['React','Node.js','MongoDB','Firebase','Tailwind'], liveUrl: 'https://cozystay-hotel-booking.web.app/', githubUrl: 'https://github.com/rianhasansiam/Hotel_COZYSTAY_Client_Side', featured: false },
  { id: 5, title: 'Visa Navigator', description: 'Visa info platform with country-specific requirements.', image: '/visanavigator.png', technologies: ['React','Node.js','Express.js','MongoDB','CSS3'], liveUrl: 'https://visa-navigator-client.web.app/', githubUrl: 'https://github.com/rianhasansiam/visa-navigator-client', featured: false },
  { id: 6, title: 'Linggo Bingo', description: 'Interactive language learning game with gamification.', image: '/LinggoBingo.png', technologies: ['React','Node.js','Express.js','MongoDB'], liveUrl: 'https://linggo-bingo-fc382.web.app/', githubUrl: 'https://github.com/rianhasansiam/linggo-bingo-client', featured: false },
  { id: 7, title: 'Gadget Haven', description: 'Electronics showcase with reviews and tech trends.', image: '/gugedt.png', technologies: ['React','JavaScript','Tailwind','Firebase'], liveUrl: 'https://gadget-assignment_08.surge.sh', githubUrl: 'https://github.com/rianhasansiam/assignment_08', featured: false },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children, { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } })
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.from(card, { y: 80, opacity: 0, scale: 0.95, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="scroll-panel relative py-32">
      <div className="ambient-orb ambient-orb-2" style={{ top: '30%', right: '-10%' }} />
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">Recent work</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {projects.map((p, i) => (
            <div key={p.id} ref={el => cardsRef.current[i] = el} className={`project-card-scroll group ${p.featured ? 'lg:col-span-2' : ''}`}>
              <div className={`flex ${p.featured ? 'flex-col md:flex-row' : 'flex-col'}`}>
                <div className={`relative overflow-hidden ${p.featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-52'}`}>
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/30 to-transparent" />
                  {p.featured && <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white text-[10px] uppercase tracking-wider font-semibold rounded-full">Featured</div>}
                </div>
                <div className={`p-6 flex flex-col ${p.featured ? 'md:w-1/2' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{p.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed mb-4 flex-grow">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.technologies.slice(0, 5).map(t => <span key={t} className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] text-white/40 rounded-md text-[10px] font-medium">{t}</span>)}
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <button onClick={() => setSelected(p)} className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"><Eye size={14} /> Details</button>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/30 hover:text-white text-xs transition-colors"><ExternalLink size={14} /> Live</a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/30 hover:text-white text-xs transition-colors"><Github size={14} /> Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto glass-card p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Want to see more?</h3>
          <p className="text-white/30 text-sm mb-6">Check out my GitHub for more projects.</p>
          <a href="https://github.com/rianhasansiam" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2"><Github size={18} /> View GitHub</a>
        </div>
      </div>

      {selected && (<>
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" onClick={() => setSelected(null)} />
        <div className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-auto">
          <div className="glass-card p-6 md:p-8 max-w-5xl mx-auto relative" style={{ background: 'rgba(10,10,30,0.95)' }}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white/30 hover:text-white bg-white/5 rounded-full p-2"><X size={20} /></button>
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6"><Image src={selected.image} alt={selected.title} fill className="object-cover" /></div>
            <h3 className="text-3xl font-bold gradient-text mb-4">{selected.title}</h3>
            <p className="text-white/40 leading-relaxed mb-6">{selected.longDescription || selected.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">{selected.technologies.map(t => <span key={t} className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/20 text-white/80 rounded-lg text-sm">{t}</span>)}</div>
            <div className="flex gap-4">
              <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2"><ExternalLink size={18} /> Live Demo</a>
              <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2"><Github size={18} /> Source</a>
            </div>
          </div>
        </div>
      </>)}
    </section>
  )
}

export default Projects
