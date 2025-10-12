'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Eye, X } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'DigiCam Market',
      description: 'A full-stack, production-ready e-commerce platform featuring secure authentication, real-time cart management, live chat support, admin dashboard, and comprehensive API security.',
      longDescription: 'A modern e-commerce solution built with Next.js 15 and React 19, featuring NextAuth authentication with Google OAuth, real-time WebSocket-powered chat system, Redux Toolkit state management, comprehensive admin dashboard with product/order/user management, coupon system, and advanced security with CORS protection, role-based authorization, and encrypted passwords.',
      image: '/digiCamCoverPic.png',
      technologies: ['Next.js', 'React', 'MongoDB', 'NextAuth', 'Redux Toolkit', 'Socket.io', 'Tailwind CSS'],
      liveUrl: 'https://digicammarket.com',
      githubUrl: 'https://github.com/rianhasansiam/digicam',
      category: 'fullstack',
      featured: true,
      gradient: 'from-blue-500 to-purple-600',
    },
     {
      id: 2,
      title: 'Sahaba Store',
      description: 'An e-commerce platform specializing in Islamic products, books, and accessories with secure payment integration and user-friendly interface.',
      longDescription: 'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, product catalog, shopping cart, secure payment processing with Stripe, and admin dashboard for inventory management.',
      image: '/sahaba-store.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://sahaba-store.vercel.app',
      githubUrl: 'https://github.com/rianhasansiam/sahaba_store',
      category: 'fullstack',
      featured: true,
      gradient: 'from-yellow-500 to-red-500',
    },
    {
      id: 3,
      title: 'Scholarship Management System',
      description: 'A comprehensive web application for scholarship management with advanced search, application tracking, and analytics.',
      longDescription: 'Built with React and Express.js, this system allows students to search and apply for scholarships while providing administrators with powerful tools to manage applications, track progress, and generate reports.',
      image: '/scholarshiHUb.png',
      technologies: ['React', 'Express.js', 'MongoDB', 'JWT', 'Recharts', 'Firebase'],
      liveUrl: 'https://assignment-12-b3c0e.web.app',
      githubUrl: 'https://github.com/rianhasansiam/ScholarShip_Hub',
      category: 'fullstack',
      featured: true,
      gradient: 'from-blue-500 to-green-500',
    },
    {
      id: 4,
      title: 'COZYSTAY Hotel',
      description: 'A modern hotel booking platform with room listings, availability checking, and secure booking system.',
      longDescription: 'A responsive hotel booking website featuring room search and filtering, real-time availability checking, booking management, and user authentication with a clean, modern design.',
      image: '/assignment11.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://cozystay-hotel-booking.web.app/',
      githubUrl: 'https://github.com/rianhasansiam/Hotel_COZYSTAY_Client_Side',
      category: 'fullstack',
      featured: false,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Visa Navigator',
      description: 'A comprehensive visa information and application platform with country-specific requirements and document management.',
      longDescription: 'An intuitive platform that helps users navigate visa requirements for different countries, featuring document checklists, application tracking, and country-specific information.',
      image: '/visanavigator.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
      liveUrl: 'https://visa-navigator-client.web.app/',
      githubUrl: 'https://github.com/rianhasansiam/visa-navigator-client',
      category: 'fullstack',
      featured: false,
      gradient: 'from-green-500 to-blue-500',
    },
    {
      id: 6,
      title: 'Linggo Bingo',
      description: 'An interactive language learning game that makes vocabulary building fun and engaging through gamification.',
      longDescription: 'A modern language learning app with interactive games, progress tracking, and personalized learning paths to help users improve their vocabulary and language skills.',
      image: '/LinggoBingo.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Game Logic'],
      liveUrl: 'https://linggo-bingo-fc382.web.app/',
      githubUrl: 'https://github.com/rianhasansiam/linggo-bingo-client',
      category: 'fullstack',
      featured: false,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 7,
      title: 'Gadget Haven',
      description: 'A comprehensive gadget and electronics platform featuring product reviews, details, and the latest tech trends. Users can explore, review, and discover cutting-edge gadgets and devices.',
      longDescription: 'A modern electronics showcase platform built with React and Firebase, featuring gadget reviews, product catalogs, tech trend analysis, and user-friendly interface for gadget enthusiasts.',
      image: '/gugedt.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
      liveUrl: 'https://gadget-assignment_08.surge.sh',
      githubUrl: 'https://github.com/rianhasansiam/assignment_08',
      category: 'frontend',
      featured: false,
      gradient: 'from-blue-500 to-green-500',
    },
   
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="section-padding bg-gray-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            Featured 
            <span className="gradient-text ml-2">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl glass-effect transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className={`flex ${project.featured ? 'flex-col md:flex-row' : 'flex-col'} h-full`}>
                {/* Image Section */}
                <div className={`relative ${project.featured ? 'md:w-1/2' : 'w-full h-56'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={`p-6 flex flex-col ${project.featured ? 'md:w-1/2' : 'w-full'}`}>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 mt-auto">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow text-sm font-medium"
                    >
                      <Eye size={16} />
                      View Details
                    </motion.button>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more projects and contributions to open-source software.
            </p>
            <motion.a
              href="https://github.com/rianhasansiam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Github size={20} />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-auto"
            >
              <div className="glass-effect rounded-3xl p-6 md:p-8 max-w-5xl mx-auto">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-full p-2"
                >
                  <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="flex flex-col gap-6">
                  {/* Image */}
                  <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    {selectedProject.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-lg text-sm font-medium shadow-lg`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 btn-primary"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 btn-secondary"
                      >
                        <Github size={20} />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
