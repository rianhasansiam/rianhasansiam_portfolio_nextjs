'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Eye, X, Github, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'ByteEdu',
    description: 'Production-ready multi-tenant school and college management SaaS platform with four dedicated panels.',
    longDescription: 'ByteEdu is a real-world EdTech SaaS platform where multiple institutions can operate securely on one system with complete data isolation. It combines institution-aware architecture, role-based workflows, secure API guards, caching, and responsive dashboard experiences across SuperAdmin, Admin, Teacher, and Student panels.',
    image: '/byteEdu.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Redis', 'NextAuth.js', 'Redux Toolkit'],
    liveUrl: 'https://byte-edu-bd.vercel.app',
    githubUrl: 'https://github.com/rianhasansiam/ByteEdu',
    featured: true,
    tag: 'SaaS · EdTech',
    panels: [
      { title: 'SuperAdmin Panel', description: 'Manage institutions, subscription plans, billing, global users, and platform-wide notices.' },
      { title: 'Admin Panel', description: 'Run school operations across students, teachers, classes, sections, attendance, assignments, and institution notices.' },
      { title: 'Teacher Panel', description: 'View assigned classes, access student rosters, mark daily attendance, and review attendance history.' },
      { title: 'Student Panel', description: 'View profile details, attendance records, routines, exam schedules, results, and notices.' },
    ],
    highlights: [
      'Multi-tenant data isolation with institutionId',
      'Role-based access control across four user types',
      'Secure authentication and guarded APIs',
      'Redis plus Next.js caching strategy',
      'Cache invalidation after data mutations',
      'Responsive dashboard UI with production-focused architecture',
    ],
    demoCredentials: [
      { role: 'SuperAdmin', email: 'superadmin@gmail.com', password: 'SuperAdmin123' },
      { role: 'Admin', email: 'admin@gmail.com', password: 'Admin123' },
      { role: 'Teacher', email: 'teacher@gmail.com', password: 'Teacher123' },
      { role: 'Student', email: 'student@gmail.com', password: 'Student123' },
    ],
  },
  {
    id: 2,
    title: 'DigiCam Market',
    description: 'Full-stack camera e-commerce platform for shoppers and store administrators.',
    longDescription: 'DigiCam Market is a real-world commerce platform where customers can discover camera gear, complete purchases smoothly, and manage their shopping activity, while administrators run products, orders, promotions, and operational settings from a dedicated dashboard.',
    image: '/digiCamCoverPic.png',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth.js', 'Redux Toolkit', 'TanStack Query', 'Framer Motion'],
    liveUrl: 'https://digicammarket.com',
    githubUrl: 'https://github.com/rianhasansiam/digicam',
    featured: true,
    tag: 'E-Commerce',
    panels: [
      { title: 'Customer Storefront', description: 'Browse products by category, search and filter inventory, inspect product details, save wishlist items, manage carts, apply coupons, complete checkout, upload advance-payment proof, and manage profile, orders, and reviews.' },
      { title: 'Admin Dashboard', description: 'Manage products, users, orders, categories, customer reviews, homepage banners, coupons, sales campaigns, shipping and tax settings, customer messages, and revenue or investment tracking.' },
    ],
    highlights: [
      'Role-based admin access control',
      'Secure authentication with credentials and Google OAuth',
      'API origin checks and protected route handling',
      'Server-side stock and price verification during order creation',
      'Product, review, and API caching with on-demand invalidation',
      'Centralized state and reusable data hooks',
      'Dynamic admin tooling for promotions, banners, and store configuration',
      'Responsive storefront and dashboard UI',
    ],
  },
  {
    id: 3,
    title: 'EngineersGadget',
    description: 'Full-stack e-commerce platform for tech gadgets, electronics, and engineering tools.',
    longDescription: 'EngineersGadget is a real-world online shopping system focused on product discovery, smooth purchasing flows, and practical store management from a single platform. It brings together a responsive storefront, account features, order workflows, and an admin dashboard for day-to-day commerce operations.',
    image: '/EngineersGadget.png',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'MongoDB', 'NextAuth.js', 'Redux Toolkit', 'React Query', 'Framer Motion'],
    liveUrl: 'https://engineersgadget.com.bd',
    featured: true,
    tag: 'E-Commerce',
    panels: [
      { title: 'Customer Shopping Experience', description: 'Browse featured products, categories, product details, advanced filters, search, wishlist, cart, and a responsive storefront experience.' },
      { title: 'User Account Features', description: 'Use email and password or Google authentication, manage profiles, review order history, submit reviews, and follow personalized shopping flows.' },
      { title: 'Checkout & Orders', description: 'Move through a structured checkout flow with coupon support, address handling, order placement, and order tracking.' },
      { title: 'Admin Dashboard', description: 'Manage products, categories, orders, customers, coupons, homepage hero slides, store settings, and dashboard insights from one panel.' },
    ],
    highlights: [
      'Role-based access control for admin-only operations',
      'Secure authentication with credentials and Google OAuth',
      'Protected API routes for users, orders, reviews, and store management',
      'Centralized client state with Redux Toolkit',
      'React Query caching with on-demand invalidation',
      'SEO metadata, structured data, and dynamic sitemap generation',
      'Responsive, production-minded e-commerce UI',
      'Modular full-stack architecture with scalable API routes',
    ],
  },
  {
    id: 4,
    title: 'Sahaba Store',
    description: 'Full-stack e-commerce platform for smooth shopping flows and practical admin-side store management.',
    longDescription: 'Sahaba Store is a complete online shopping system where customers can discover products, save favorites, place orders, and move through a polished checkout flow, while admins manage core store operations from a dedicated dashboard.',
    image: '/sahaba-store.png',
    technologies: ['Vite', 'Tailwind CSS', 'DaisyUI', 'Firebase Auth', 'TanStack Query', 'Axios', 'Express.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://sahaba-store.vercel.app',
    githubUrl: 'https://github.com/rianhasansiam/sahaba_store',
    featured: true,
    tag: 'E-Commerce',
    panels: [
      { title: 'Customer Storefront', description: 'Browse products by category, view detailed product pages, add items to cart or wishlist, apply coupon codes, complete checkout, and receive order confirmation.' },
      { title: 'Admin Panel', description: 'Manage users, categories, products, orders, coupon codes, and store activity through a responsive dashboard interface.' },
    ],
    highlights: [
      'Full-stack e-commerce workflow',
      'Firebase-based authentication',
      'Product, category, and coupon management',
      'Cart and wishlist handling',
      'Checkout flow with coupon discounts',
      'Order creation and order-status management',
      'Responsive storefront and admin dashboard',
      'REST API integration with MongoDB persistence',
    ],
  },
  {
    id: 5,
    title: 'COZYSTAY Hotel',
    description: 'Modern hotel booking platform for room discovery, secure reservations, and smooth booking management.',
    longDescription: 'COZYSTAY is a guest-focused hospitality web app where users can explore rooms, review amenities, make reservations, manage bookings, and share feedback from one responsive interface.',
    image: '/assignment11.png',
    technologies: ['Vite', 'Tailwind CSS', 'DaisyUI', 'Firebase Auth', 'Axios', 'React Hook Form', 'React DatePicker', 'React Leaflet', 'Swiper'],
    liveUrl: 'https://hotel-cozystay-client-side.vercel.app',
    githubUrl: 'https://github.com/rianhasansiam/Hotel_COZYSTAY_Client_Side',
    featured: false,
    tag: 'Hospitality',
    panels: [
      { title: 'Room Discovery', description: 'Browse featured rooms, explore detailed room pages, compare amenities, view pricing, and filter rooms by budget.' },
      { title: 'Reservation Workflow', description: 'Authenticated users can book rooms with check-in and check-out dates, guest counts, room quantity, and live total-cost calculation.' },
      { title: 'Booking Management', description: 'Users can view reservations, update booking details, and cancel bookings through a protected account flow.' },
      { title: 'Review System', description: 'Guests can submit feedback tied to their bookings, while the app checks for existing reviews before allowing duplicate submissions.' },
    ],
    highlights: [
      'Protected routes for booking-related actions',
      'Firebase authentication with backend JWT session sync',
      'Reservation create, update, and cancel flows',
      'Room filtering and dynamic room detail loading',
      'Booking-linked review submission',
      'Interactive map and carousel-based presentation',
      'Responsive UI with reusable component structure',
      'Clean production build and lint-ready frontend code',
    ],
  },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const [selected, setSelected] = useState(null)

  const featuredProject = projects[0]
  const gridProjects = projects.slice(1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.from(card, {
          y: 50,
          opacity: 0,
          scale: 0.97,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="stacked-panel stacked-panel--projects" ref={sectionRef}>
      <div className="panel-card py-20">
        <div className="ambient-orb ambient-orb-2" style={{ top: '20%', right: '-4%' }} />

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div ref={headingRef} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-purple-400/60 mb-2 font-medium">
                Selected work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Projects built for{' '}
                <span className="gradient-text">real workflows</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {[
                { val: projects.length, label: 'Builds' },
                { val: new Set(projects.flatMap(p => p.technologies)).size, label: 'Tech' },
                { val: projects.reduce((t, p) => t + (p.panels?.length || 0), 0), label: 'Flows' },
              ].map(({ val, label }) => (
                <div key={label} className="pj-stat-chip">
                  <span className="pj-stat-val">{val}</span>
                  <span className="pj-stat-lbl">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Featured Card ── */}
          <div
            ref={el => (cardsRef.current[0] = el)}
            className="pj-featured group mb-6"
          >
            <div className="pj-featured-img">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070714]/90 via-[#070714]/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="pj-pill pj-pill--cyan">Lead project</span>
                  <span className="pj-pill pj-pill--dim">{featuredProject.tag}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.highlights?.slice(0, 2).map(h => (
                    <span key={h} className="pj-pill pj-pill--overlay text-[10px]">{h}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pj-featured-body">
              <div className="flex items-center gap-2 mb-3">
                <span className="pj-pill pj-pill--purple">Flagship</span>
                <span className="pj-pill pj-pill--dim">{featuredProject.technologies.length} stack pieces</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {featuredProject.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {featuredProject.technologies.slice(0, 6).map(t => (
                  <span key={t} className="pj-tech-tag">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelected(featuredProject)}
                  className="pj-btn-primary"
                >
                  <Eye size={14} /> Details
                </button>
                {featuredProject.liveUrl && (
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="pj-btn-ghost">
                    <ArrowUpRight size={14} /> Live
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="pj-btn-ghost">
                    <FaGithub size={13} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── Project Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {gridProjects.map((p, i) => (
              <div
                key={p.id}
                ref={el => (cardsRef.current[i + 1] = el)}
                className="pj-card group"
              >
                <div className="pj-card-img relative">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070714]/85 via-[#070714]/30 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`pj-pill ${p.featured ? 'pj-pill--cyan' : 'pj-pill--dim'}`}>
                      {p.featured ? 'Featured' : 'Selected'}
                    </span>
                    <span className="pj-pill pj-pill--dim text-[10px]">{p.tag}</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-200 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-white/38 text-xs leading-relaxed mb-3 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.technologies.slice(0, 3).map(t => (
                      <span key={t} className="pj-tech-tag">{t}</span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="pj-tech-tag">+{p.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="pj-btn-primary pj-btn-primary--sm"
                    >
                      <Eye size={12} /> View
                    </button>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="pj-btn-icon" title="Live">
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="pj-btn-icon" title="GitHub">
                        <FaGithub size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA Strip ── */}
          <div className="pj-cta-strip">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-purple-400/60 mb-1 font-medium">
                More experiments
              </p>
              <h3 className="text-lg font-bold text-white">
                The rest of the archive lives on GitHub.
              </h3>
            </div>
            <a
              href="https://github.com/rianhasansiam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap !py-2.5 !px-6 !text-sm"
            >
              <FaGithub size={15} /> View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[200]"
            onClick={() => setSelected(null)}
          />
          <div className="fixed inset-3 md:inset-8 lg:inset-14 z-[201] overflow-auto">
            <div className="glass-card p-5 md:p-7 max-w-4xl mx-auto relative" style={{ background: 'rgba(10,10,30,0.96)' }}>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white/30 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-1.5 transition-all"
              >
                <X size={17} />
              </button>

              <div className="relative w-full h-44 md:h-64 rounded-xl overflow-hidden mb-5">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070714]/70 to-transparent" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                {selected.tag && <span className="pj-pill pj-pill--purple">{selected.tag}</span>}
              </div>

              <h3 className="text-2xl font-bold gradient-text mb-2">{selected.title}</h3>

              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {selected.longDescription || selected.description}
              </p>

              {selected.panels && (
                <div className="mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Platform Panels</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selected.panels.map(panel => (
                      <div key={panel.title} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                        <h5 className="text-xs font-semibold text-white mb-1">{panel.title}</h5>
                        <p className="text-xs leading-relaxed text-white/38">{panel.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.highlights && (
                <div className="mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Engineering Focus</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.highlights.map(item => (
                      <span key={item} className="px-3 py-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/[0.07] text-xs text-white/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-5">
                {selected.technologies.map(t => (
                  <span key={t} className="pj-tech-tag">{t}</span>
                ))}
              </div>

              {selected.demoCredentials && (
                <div className="mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Demo Credentials</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selected.demoCredentials.map(c => (
                      <div key={c.role} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                        <p className="text-xs font-semibold text-white mb-1">{c.role}</p>
                        <p className="text-xs text-white/45">{c.email}</p>
                        <p className="text-xs text-white/45">{c.password}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                {selected.liveUrl && (
                  <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 !py-2.5 !px-5 !text-sm">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 !py-2.5 !px-5 !text-sm">
                    <FaGithub size={15} /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Projects