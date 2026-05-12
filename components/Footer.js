'use client'

import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaHeart } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rianhasansiam', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rian-hasan-siam/', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/rianhasan1971', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rian_hasan_siam/', label: 'Instagram' },
    { icon: FaTelegram, url: 'https://t.me/rianhasansiam', label: 'Telegram' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#030308]">
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <img src="/rianface.jpg" alt="R" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Rian Hasan Siam</h3>
                  <p className="text-xs text-purple-400/60">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-white/25 text-sm leading-relaxed max-w-md mb-6">
                Passionate about creating innovative web solutions with modern technologies.
                Always eager to learn and tackle new challenges.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-white hover:border-purple-500/30 transition-all duration-300" aria-label={s.label}>
                    <s.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-white/20 hover:text-white/60 transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/20">
                <li>Web Development</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-white/15">
              <span>© {currentYear} Rian Hasan Siam. Made with</span>
              <FaHeart className="text-red-500/50" size={10} />
              <span>using Next.js</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/15">Designed & Built by Rian Hasan Siam</span>
              <button onClick={scrollToTop} className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-white hover:border-purple-500/30 transition-all duration-300" aria-label="Back to top">
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
