'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'React', image: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000', category: 'frontend', level: 95 },
  { name: 'Next.js', image: 'https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000', category: 'frontend', level: 95 },
  { name: 'JavaScript', image: 'https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000', category: 'frontend', level: 95 },
  { name: 'TypeScript', image: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000', category: 'frontend', level: 90 },
  { name: 'HTML5', image: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', category: 'frontend', level: 98 },
  { name: 'CSS3', image: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', category: 'frontend', level: 98 },
  { name: 'Tailwind', image: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=38bdf8', category: 'frontend', level: 98 },
  { name: 'Node.js', image: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000', category: 'backend', level: 95 },
  { name: 'Express.js', image: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=FFFFFF', category: 'backend', level: 93 },
  { name: 'Prisma', image: 'https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000', category: 'backend', level: 85 },
  { name: 'MongoDB', image: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', category: 'database', level: 100 },
  { name: 'PostgreSQL', image: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000', category: 'database', level: 85 },
   { name: 'MySQL', image: 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000', category: 'database', level: 80 },
 
  { name: 'Neon', image: 'https://img.icons8.com/?size=100&id=44080&format=png&color=40C057', category: 'database', level: 90 },

  { name: 'Firebase', image: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000', category: 'database', level: 80 },
  { name: 'Git', image: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', category: 'tools', level: 90 },
  { name: 'N8n', image: '/n8n.png', category: 'tools', level: 65 },
  { name: 'GitHub', image: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF', category: 'tools', level: 90 },
  { name: 'Figma', image: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000', category: 'design', level: 80 },
   { name: 'Filmora', image: 'https://img.icons8.com/?size=100&id=3GKqWSMI7o9v&format=png&color=000000', category: 'design', level: 70 },
  { name: 'Photoshop', image: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000', category: 'design', level: 85 },
  { name: 'Canva', image: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000', category: 'design', level: 92 },
  { name: 'Illustrator', image: 'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', category: 'design', level: 85 },
  { name: 'C', image: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', category: 'other', level: 92 },
]
const categories = [
  { id: 'all', name: 'All' }, { id: 'frontend', name: 'Frontend' }, { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' }, { id: 'tools', name: 'Tools' }, { id: 'design', name: 'Design' },
]

const Skills = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(s => s.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!gridRef.current) return
    gsap.fromTo(gridRef.current.children, { y: 40, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, stagger: 0.04, duration: 0.5, ease: 'power2.out' })
  }, [activeCategory])

  return (
    <section id="skills" className="stacked-panel stacked-panel--skills" ref={sectionRef}>
      <div className="panel-card py-32">
        <div className="ambient-orb ambient-orb-1" style={{ top: '20%', left: '80%' }} />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">What I work with</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Skills & <span className="gradient-text">Expertise</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 border ${activeCategory === cat.id ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/20' : 'bg-white/[0.03] text-white/40 border-white/[0.06] hover:text-white/70 hover:border-white/10'}`}>{cat.name}</button>
            ))}
          </div>
          <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5 mb-16">
            {filteredSkills.map(skill => (
              <div key={skill.name} className="group text-center">
                <div className="skill-orb mx-auto mb-3">
                  <Image src={skill.image} alt={skill.name} width={40} height={40} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xs font-medium text-white/60 group-hover:text-white/90 transition-colors mb-1.5">{skill.name}</h4>
                <div className="w-12 h-0.5 mx-auto rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto glass-card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">My Tech Stack</h3>
            <p className="text-white/30 text-sm mb-6 leading-relaxed">I specialize in the MERN stack with a focus on creating scalable, performant applications.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map(t => (
                <span key={t} className="px-4 py-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 text-white/80 rounded-full text-xs font-medium">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills
