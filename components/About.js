'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Heart, Target, Coffee, Code, Gamepad2, Tv } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [counters, setCounters] = useState([0, 0, 0, 0])
  const controls = useAnimation()

  const stats = [
    { number: 50, label: 'Projects Completed', suffix: '+' },
    { number: 2, label: 'Years Experience', suffix: '+' },
    { number: 15, label: 'Technologies Mastered', suffix: '+' },
    { number: 100, label: 'Client Satisfaction', suffix: '%' },
  ]

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let startValue = 0
        const duration = 2000 // 2 seconds
        const increment = stat.number / (duration / 16) // 60fps
        
        const timer = setInterval(() => {
          startValue += increment
          if (startValue >= stat.number) {
            startValue = stat.number
            clearInterval(timer)
          }
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = Math.floor(startValue)
            return newCounters
          })
        }, 16)
        
        return () => clearInterval(timer)
      })
    }
  }, [inView])

  const interests = [
    { icon: Code, title: 'Programming', description: 'Love solving complex problems with clean, efficient code' },
    { icon: Gamepad2, title: 'Gaming', description: 'Enjoy strategic games and exploring virtual worlds' },
    { icon: Tv, title: 'Watching Sports', description: 'Fueling creativity one cup at a time' },
    { icon: Heart, title: 'Football', description: 'Passionate about the beautiful game' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-800/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

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
            About 
            <span className="gradient-text ml-2">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Get to know more about who I am, what I do, and what inspires me as a developer.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image and stats */}
          <motion.div
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="relative inline-block mb-8"
            >
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl transform -rotate-6"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-700">
                  <Image
                    src="/rianface.jpg"
                    alt="Rian Hasan Siam"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="glass-effect p-4 rounded-xl hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-1"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  >
                    {counters[index]}{stat.suffix}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-blue-400">Rian Hasan Siam</span>, 
                a passionate Software Engineering student at Daffodil International University. 
                I specialize in full-stack web development with a focus on creating innovative, 
                scalable solutions that solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I love building modern web applications using cutting-edge technologies like React, 
                Next.js, and Node.js. From frontend interfaces to backend APIs, I enjoy the entire 
                development process and constantly strive to improve my skills.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold text-white">What Drives Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                My passion for technology and continuous learning drives me to stay updated with 
                the latest trends and best practices. I believe in writing clean, maintainable code 
                and creating user experiences that make a difference.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            My Interests & Hobbies
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              My Future Goals
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I aspire to become a senior full-stack developer, contributing to innovative projects 
              that make a positive impact on society. My goal is to continuously learn, grow, and 
              eventually lead development teams in creating cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Senior Full-Stack Developer',
                'Team Leadership',
                'Open Source Contributor',
                'Tech Entrepreneur',
                'Continuous Learning'
              ].map((goal) => (
                <span
                  key={goal}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-semibold text-sm"
                >
                  {goal}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
