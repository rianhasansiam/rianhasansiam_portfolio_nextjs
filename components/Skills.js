'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)
  const filtersRef = useRef(null)
  const summaryRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const skills = [
    { name: 'React', image: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000', category: 'frontend', level: 95 },
    { name: 'Next.js', image: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=FFFFFF', category: 'frontend', level: 90 },
    { name: 'JavaScript', image: 'https://img.icons8.com/?size=100&id=MjuloYXjXHYT&format=png&color=000000', category: 'frontend', level: 95 },
    { name: 'TypeScript', image: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000', category: 'frontend', level: 85 },
    { name: 'HTML5', image: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', category: 'frontend', level: 98 },
    { name: 'CSS3', image: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', category: 'frontend', level: 95 },
    { name: 'Tailwind CSS', image: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=38bdf8', category: 'frontend', level: 95 },
    { name: 'Node.js', image: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000', category: 'backend', level: 85 },
    { name: 'Express.js', image: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=FFFFFF', category: 'backend', level: 85 },
    { name: 'Prisma', image: 'https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000', category: 'backend', level: 80 },
    { name: 'MongoDB', image: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', category: 'database', level: 85 },
    { name: 'PostgreSQL', image: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000', category: 'database', level: 80 },
    { name: 'Firebase', image: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000', category: 'database', level: 80 },
    { name: 'Git', image: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', category: 'tools', level: 85 },
    { name: 'GitHub', image: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF', category: 'tools', level: 88 },
    { name: 'Figma', image: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000', category: 'design', level: 80 },
    { name: 'Photoshop', image: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000', category: 'design', level: 90 },
    { name: 'Canva', image: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000', category: 'design', level: 92 },
    { name: 'Illustrator', image: 'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', category: 'design', level: 88 },
    { name: 'C', image: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', category: 'other', level: 75 },
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools' },
    { id: 'design', name: 'Design' },
  ]

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(headingRef.current?.children, {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })

      // Filters
      if (filtersRef.current) {
        gsap.from(filtersRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: filtersRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      // Summary card
      gsap.from(summaryRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: summaryRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate grid items on filter change
  useEffect(() => {
    if (!gridRef.current) return
    const items = gridRef.current.children
    gsap.fromTo(items,
      { y: 40, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.04,
        duration: 0.5,
        ease: 'power2.out',
      }
    )
  }, [activeCategory])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="scroll-panel relative py-32"
    >
      <div className="ambient-orb ambient-orb-1" style={{ top: '20%', left: '80%' }} />
      <div className="ambient-orb ambient-orb-2" style={{ bottom: '10%', left: '10%' }} />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">What I work with</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/20'
                  : 'bg-white/[0.03] text-white/40 border-white/[0.06] hover:text-white/70 hover:border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5 mb-16"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group text-center"
            >
              <div className="skill-orb mx-auto mb-3">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xs font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300 mb-1.5">
                {skill.name}
              </h4>
              {/* Mini progress bar */}
              <div className="w-12 h-0.5 mx-auto rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <div ref={summaryRef} className="max-w-3xl mx-auto">
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">My Tech Stack</h3>
            <p className="text-white/30 text-sm mb-6 leading-relaxed">
              I specialize in the MERN stack with a focus on creating scalable,
              performant applications with modern UI/UX principles.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 text-white/80 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
