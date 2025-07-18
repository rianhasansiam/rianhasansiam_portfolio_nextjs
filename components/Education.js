'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const educationData = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Daffodil International University',
      duration: '2025 - Present',
      location: 'Savar,Dhaka, Bangladesh',
      description: 'Currently pursuing my degree with a focus on web development, software architecture, and modern programming practices.',
      grade: 'CGPA: 3.8/4.0',
      highlights: [
        'Web Development Specialization',
        'Software Architecture & Design',
        'Database Management Systems',
        'Data Structures & Algorithms',
        'Software Engineering Principles',
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-600',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'BCIC College',
      duration: '2019 - 2021',
      location: 'Mirpur-1,Dhaka, Bangladesh',
      description: 'Completed HSC in Science group with distinction, developing strong foundations in mathematics and sciences.',
      grade: 'GPA: 5.0/5.0',
      highlights: [
        'Science Group (Mathematics, Physics, Chemistry)',
        'Computer Science Fundamentals',
        'Leadership in Sports Club',
        'Achived 1st place in inter-college programming competition',
      ],
      icon: GraduationCap,
      color: 'from-green-500 to-blue-600',
    },
     {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'BCIC School',
      duration: '2011 - 2021',
      location: 'Mirpur-1,Dhaka, Bangladesh',
      description: 'Completed SSC in Science group.',
      grade: 'CGPA: 5.0/5.0',
      highlights: [
        'Science Group (Mathematics, Physics, Chemistry)',
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="education" className="section-padding bg-gray-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            Education &
            <span className="gradient-text ml-2">Learning</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            My educational journey has shaped my passion for technology and continuous learning.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-800 z-10 hidden md:block"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-8 relative overflow-hidden group"
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {item.degree}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        {item.institution}
                      </h4>

                      <p className="text-gray-300 mb-4">
                        {item.description}
                      </p>

                      {/* <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="text-yellow-400 font-semibold">{item.grade}</span>
                      </div> */}

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-white">Key Highlights:</h5>
                        <ul className="space-y-1">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 mb-6">
              Beyond formal education, I continuously expand my knowledge through online courses, 
              workshops, and hands-on projects to stay updated with the latest technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Modern Web Development',
                'Backend Development with Node.js',
                'Mobile App Development',
                'UI/UX Design',
                'Machine Learning Basics',
                'Problem-Solving',
                'Team Collaboration',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-semibold text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
