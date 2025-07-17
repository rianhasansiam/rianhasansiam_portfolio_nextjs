'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Rian_Hasan_Siam_CV.pdf'
    link.download = 'Rian_Hasan_Siam_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rianhasansiam', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rian-hasan-siam/', color: 'hover:text-blue-500' },
    { icon: FaFacebook, url: 'https://www.facebook.com/rianhasan1971', color: 'hover:text-blue-600' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rian_hasan_siam/', color: 'hover:text-pink-500' },
    { icon: FaTelegram, url: 'https://t.me/rianhasansiam', color: 'hover:text-blue-400' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => {
          // Using deterministic positions based on index instead of Math.random()
          const left = ((i * 4.7) % 100).toFixed(2);
          const top = ((i * 5.3) % 100).toFixed(2);
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 2) * 2,
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
          );
        })}
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          >
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start space-x-6 mb-8 "
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-gray-400 transition-colors duration-300 ${social.color} mt-10`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-shadow">
                <motion.span
                  className="block"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                    backgroundSize: '200% 100%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Rian Hasan Siam
                </motion.span>
              </h1>
              
              <div className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'React Specialist',
                    2000,
                    'Next.js Expert',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="gradient-text"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about creating innovative web solutions with modern technologies. 
              I build scalable applications that deliver exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex  sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-primary flex items-center gap-2"
              >
                <FaDownload />
                Download CV
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '120%',
                  height: '120%',
                  top: '-10%',
                  left: '-10%',
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '140%',
                  height: '140%',
                  top: '-20%',
                  left: '-20%',
                }}
              />

              {/* Profile image container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full" />
                <Image
                  src="/rianface.jpg"
                  alt="Rian Hasan Siam"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  )
}

export default Hero
