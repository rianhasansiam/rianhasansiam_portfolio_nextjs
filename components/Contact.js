'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import { useToast } from './CustomToast'
import emailjs from '@emailjs/browser'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const form = useRef()
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'rianhasan1971@gmail.com', href: 'mailto:rianhasan1971@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+880 1932600504', href: 'tel:+8801932600504' },
    { icon: MapPin, title: 'Location', value: 'Dhaka, Bangladesh', href: '#' },
  ]
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rianhasansiam', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rian-hasan-siam/', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/rianhasan1971', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rian_hasan_siam/', label: 'Instagram' },
    { icon: FaTelegram, url: 'https://t.me/rianhasansiam', label: 'Telegram' },
  ]

  const validateField = (name, value) => {
    switch (name) {
      case 'name': return value.length < 2 ? 'Min 2 characters' : ''
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email' : ''
      case 'subject': return value.length < 3 ? 'Min 3 characters' : ''
      case 'message': return value.length < 10 ? 'Min 10 characters' : ''
      default: return ''
    }
  }
  const handleInputChange = (e) => { const { name, value } = e.target; setFormData(p => ({ ...p, [name]: value })); setErrors(p => ({ ...p, [name]: validateField(name, value) })) }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}; Object.keys(formData).forEach(k => { newErrors[k] = validateField(k, formData[k]) }); setErrors(newErrors)
    if (Object.values(newErrors).some(err => err !== '')) { toast.error('Please fix errors'); return }
    setIsSubmitting(true)
    try {
      await emailjs.send('service_yrlxuma', 'template_0217uod', { from_name: formData.name, user_email: formData.email, phone: 'N/A', message: `Subject: ${formData.subject}\n\n${formData.message}`, visit_time: new Date().toLocaleString() }, 'TLs9u-trXhMYUsnMT')
      toast.success('Message sent!'); setFormData({ name: '', email: '', subject: '', message: '' })
    } catch { toast.error('Failed to send. Try again.') }
    setIsSubmitting(false)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } })
      gsap.from(leftRef.current, { x: -80, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: leftRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
      gsap.from(rightRef.current, { x: 80, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: rightRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="stacked-panel stacked-panel--contact" ref={sectionRef}>
      <div className="panel-card py-32">
        <div className="ambient-orb ambient-orb-1" style={{ bottom: '10%', right: '20%' }} />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">Let&apos;s talk</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Get In <span className="gradient-text">Touch</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={leftRef} className="space-y-6">
              <div className="glass-card p-7">
                <h3 className="text-lg font-bold text-white mb-5">Let&apos;s Connect</h3>
                <p className="text-white/30 text-sm leading-relaxed mb-6">I&apos;m always open to new opportunities, creative projects, or collaborations.</p>
                <div className="space-y-3">
                  {contactInfo.map((item, i) => (
                    <a key={i} href={item.href} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-purple-500/20 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform"><item.icon className="w-4 h-4 text-purple-400" /></div>
                      <div><h4 className="text-xs font-semibold text-white/60">{item.title}</h4><p className="text-sm text-white/30">{item.value}</p></div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="glass-card p-7">
                <h3 className="text-sm font-bold text-white mb-4">Follow Me</h3>
                <div className="flex gap-3">{socialLinks.map((s, i) => (<a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:border-purple-500/30 transition-all" aria-label={s.label}><s.icon size={16} /></a>))}</div>
              </div>
            </div>
            <div ref={rightRef}>
              <div className="glass-card p-7">
                <h3 className="text-lg font-bold text-white mb-6">Send Message</h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-medium text-white/30 mb-2">Your Name</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input-scroll" placeholder="Your Name" />{errors.name && <p className="text-red-400/80 text-xs mt-1">{errors.name}</p>}</div>
                    <div><label className="block text-xs font-medium text-white/30 mb-2">Your Email</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input-scroll" placeholder="hello@example.com" />{errors.email && <p className="text-red-400/80 text-xs mt-1">{errors.email}</p>}</div>
                  </div>
                  <div><label className="block text-xs font-medium text-white/30 mb-2">Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="form-input-scroll" placeholder="Project Discussion" />{errors.subject && <p className="text-red-400/80 text-xs mt-1">{errors.subject}</p>}</div>
                  <div><label className="block text-xs font-medium text-white/30 mb-2">Message</label><textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="form-input-scroll resize-none" placeholder="Tell me about your project..." />{errors.message && <p className="text-red-400/80 text-xs mt-1">{errors.message}</p>}</div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
                    {isSubmitting ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
