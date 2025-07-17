'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('all')

  const skills = [
    { name: 'React', image: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000', category: 'frontend', stars: 5, color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', image: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000', category: 'frontend', stars: 4, color: 'from-gray-800 to-gray-900' },
    { name: 'JavaScript', image: 'https://img.icons8.com/?size=100&id=MjuloYXjXHYT&format=png&color=000000', category: 'frontend', stars: 5, color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5', image: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', category: 'frontend', stars: 5, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', image: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', category: 'frontend', stars: 5, color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', image: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000', category: 'frontend', stars: 5, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', image: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000', category: 'backend', stars: 4, color: 'from-green-500 to-green-700' },
    { name: 'Express.js', image: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000', category: 'backend', stars: 4, color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', image: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', category: 'database', stars: 4, color: 'from-green-600 to-green-800' },
    { name: 'Firebase', image: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000', category: 'database', stars: 4, color: 'from-orange-400 to-yellow-500' },
    { name: 'Git', image: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', category: 'tools', stars: 4, color: 'from-red-500 to-red-700' },
    { name: 'GitHub', image: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000', category: 'tools', stars: 4, color: 'from-purple-600 to-purple-800' },
    { name: 'Figma', image: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000', category: 'design', stars: 4, color: 'from-purple-500 to-pink-500' },
    { name: 'Photoshop', image: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000', category: 'design', stars: 5, color: 'from-blue-600 to-indigo-600' },
    { name: 'Canva', image: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000', category: 'design', stars: 5, color: 'from-purple-400 to-blue-500' },
    { name: 'Illustrator', image: 'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', category: 'design', stars: 5, color: 'from-orange-500 to-red-600' },
    { name: 'C', image: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', category: 'programming', stars: 4, color: 'from-blue-700 to-indigo-800' },
  ]

  const categories = [
    { id: 'all', name: 'All Skills', color: 'from-blue-500 to-purple-600' },
    { id: 'frontend', name: 'Frontend', color: 'from-green-500 to-blue-600' },
    { id: 'backend', name: 'Backend', color: 'from-purple-500 to-pink-600' },
    { id: 'database', name: 'Database', color: 'from-yellow-500 to-red-600' },
    { id: 'tools', name: 'Tools', color: 'from-indigo-500 to-cyan-600' },
    { id: 'design', name: 'Design', color: 'from-pink-500 to-rose-600' },
    { id: 'programming', name: 'Programming', color: 'from-gray-500 to-blue-600' },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gray-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow"
          >
            Skills & 
            <span className="gradient-text ml-2">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            I have built a diverse array of web applications using modern technologies. 
            Here are the skills I&apos;ve mastered in my journey as a Full Stack Developer.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="skill-card group relative overflow-hidden"
            >
              {/* Skill Icon */}
              <div className="flex flex-col items-center p-6 h-full">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-white font-semibold text-center group-hover:text-blue-400 transition-colors duration-300 mb-3">
                  {skill.name}
                </h3>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + (filteredSkills.indexOf(skill) * 0.05)
                      }}
                    >
                      <svg
                        className={`w-4 h-4 ${
                          index < skill.stars 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600 fill-current'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
                
                <span className="text-xs text-gray-400">
                  {skill.stars === 5 ? 'Expert' : skill.stars === 4 ? 'Advanced' : skill.stars === 3 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              My Tech Stack
            </h3>
            <p className="text-gray-300 mb-6">
              I specialize in the MERN stack with a focus on creating scalable, 
              performant applications with modern UI/UX principles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
