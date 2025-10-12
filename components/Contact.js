'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import { useToast } from './CustomToast'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const { toast } = useToast()
  const form = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : ''
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : ''
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Real-time validation
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key])
    })
    
    setErrors(newErrors)
    setTouched({ name: true, email: true, subject: true, message: true })
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      toast.error('Please fix the errors before submitting')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const templateParams = {
        from_name: formData.name,
        user_email: formData.email,
        phone: 'Not provided', // You can add phone field if needed
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
        visit_time: new Date().toLocaleString()
      }

      // EmailJS credentials directly in the code
      const serviceId = 'service_yrlxuma';
      const templateId = 'template_0217uod';
      const publicKey = 'TLs9u-trXhMYUsnMT';

  const attemptSend = (retryCount = 0) => {
        emailjs
          .send(
            serviceId, 
            templateId, 
    templateParams, 
    // Use string form for wider EmailJS compatibility
    publicKey
          )
          .then(
            () => {
              toast.success("Message sent successfully! I will get back to you soon.")
              setFormData({ name: '', email: '', subject: '', message: '' })
              setIsSubmitting(false)
            },
            (error) => {
              console.log("Failed to send message:", error)
              
              if (retryCount < 2) {
                setTimeout(() => {
                  attemptSend(retryCount + 1)
                }, 2000 * (retryCount + 1))
              } else {
                toast.error("Message couldn't be sent after multiple attempts. Please try again later.")
                setIsSubmitting(false)
              }
            }
          )
      }

      attemptSend()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rianhasan1971@gmail.com',
      href: 'mailto:rianhasan1971@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+880 1932600504',
      href: 'tel:+8801932600504',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rianhasansiam', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rian-hasan-siam/', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/rianhasan1971', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rian_hasan_siam/', label: 'Instagram' },
    { icon: FaTelegram, url: 'https://t.me/rianhasansiam', label: 'Telegram' },
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
    <section id="contact" className="section-padding bg-gray-900/40 relative overflow-hidden">
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
            Get In 
            <span className="gradient-text ml-2">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear from you! 
            Let&apos;s discuss how we can work together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact Info */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out through any of the 
                channels below.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Rian Hasan Siam"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">{formData.name.length}/50</p>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="rianhasan1971@gmail.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Project Discussion"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">{formData.subject.length}/100</p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">{formData.message.length}/500</p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
  </section>
  )
}

export default Contact
