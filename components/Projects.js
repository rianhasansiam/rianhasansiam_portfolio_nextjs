'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Eye, X } from 'lucide-react'
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
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'MongoDB', 'NextAuth.js', 'Redux Toolkit', 'React Query', 'Framer Motion', 'Lucide React'],
    liveUrl: 'https://engineersgadget.com.bd',
    featured: true,
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
    technologies: ['Vite', 'Tailwind CSS', 'DaisyUI', 'Firebase Auth', 'Axios', 'React Hook Form', 'React DatePicker', 'React Leaflet', 'Swiper', 'SweetAlert2', 'React Toastify', 'MUI'],
    liveUrl: 'https://hotel-cozystay-client-side.vercel.app',
    githubUrl: 'https://github.com/rianhasansiam/Hotel_COZYSTAY_Client_Side',
    featured: false,
    panels: [
      { title: 'Room Discovery', description: 'Browse featured rooms, explore detailed room pages, compare amenities, view pricing, and filter rooms by budget.' },
      { title: 'Reservation Workflow', description: 'Authenticated users can book rooms with check-in and check-out dates, guest counts, room quantity, and live total-cost calculation.' },
      { title: 'Booking Management', description: 'Users can view reservations, update booking details, and cancel bookings through a protected account flow.' },
      { title: 'Review System', description: 'Guests can submit feedback tied to their bookings, while the app checks for existing reviews before allowing duplicate submissions.' },
      { title: 'Interactive Experience', description: 'Sliders, modal flows, animated sections, and a location map create a more polished hotel browsing experience.' },
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

  const leadProject = projects[0]
  const supportingProjects = projects.slice(1)
  const featuredCount = projects.filter(project => project.featured).length
  const workflowCount = projects.reduce((total, project) => total + (project.panels?.length || 0), 0)
  const stackCount = new Set(projects.flatMap(project => project.technologies)).size

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], {
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

      cardsRef.current.forEach(card => {
        if (!card) return

        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="stacked-panel stacked-panel--projects" ref={sectionRef}>
      <div className="panel-card py-32">
        <div className="ambient-orb ambient-orb-2" style={{ top: '30%', right: '-5%' }} />

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="projects-intro-grid mb-14">
            <div ref={headingRef} className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-4 font-medium">
                Selected work
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Projects built for <span className="gradient-text">real workflows</span>
              </h2>

              <p className="text-white/40 text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
                A focused mix of SaaS platforms, commerce systems, and booking experiences with deeper architecture, richer admin tooling, and polished end-user flows.
              </p>
            </div>

            <div className="projects-metrics-grid">
              <div className="project-metric">
                <span className="project-metric-value">{projects.length}</span>
                <span className="project-metric-label">Showcased builds</span>
              </div>

              <div className="project-metric">
                <span className="project-metric-value">{featuredCount}</span>
                <span className="project-metric-label">Flagship projects</span>
              </div>

              <div className="project-metric">
                <span className="project-metric-value">{workflowCount}</span>
                <span className="project-metric-label">Product flows mapped</span>
              </div>

              <div className="project-metric">
                <span className="project-metric-value">{stackCount}</span>
                <span className="project-metric-label">Technologies featured</span>
              </div>
            </div>
          </div>

          <div ref={el => (cardsRef.current[0] = el)} className="project-card-scroll project-card-scroll--lead group mb-8">
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)]">
              <div className="project-preview-frame relative min-h-[320px] md:min-h-[420px]">
                <Image
                  src={leadProject.image}
                  alt={leadProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#070714] via-[#070714]/45 to-transparent" />

                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                  <span className="project-status-pill">Lead case study</span>
                  <span className="project-status-pill project-status-pill--muted">
                    {leadProject.panels?.length || 0} mapped flows
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                  {leadProject.highlights?.slice(0, 3).map(item => (
                    <span key={item} className="project-overlay-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 xl:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="project-inline-pill">Flagship build</span>
                  <span className="project-inline-pill project-inline-pill--soft">
                    {leadProject.technologies.length} stack pieces
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                  {leadProject.title}
                </h3>

                <p className="text-white/40 leading-relaxed mb-6">
                  {leadProject.longDescription || leadProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {leadProject.panels?.slice(0, 4).map(panel => (
                    <div key={panel.title} className="project-flow-chip">
                      <span className="project-flow-title">{panel.title}</span>
                      <span className="project-flow-copy">{panel.description}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {leadProject.technologies.slice(0, 6).map(technology => (
                    <span key={technology} className="project-tech-pill">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto">
                  <button type="button" onClick={() => setSelected(leadProject)} className="project-primary-action">
                    <Eye size={16} /> Explore details
                  </button>

                  {leadProject.liveUrl && (
                    <a href={leadProject.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-action">
                      <ExternalLink size={15} /> Live product
                    </a>
                  )}

                  {leadProject.githubUrl && (
                    <a href={leadProject.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-action">
                      <FaGithub size={15} /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-14">
            {supportingProjects.map((p, i) => (
              <div key={p.id} ref={el => (cardsRef.current[i + 1] = el)} className="project-card-scroll project-card-scroll--tile group">
                <div className="flex h-full flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#070714] via-[#070714]/35 to-transparent" />

                    <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                      {p.featured ? (
                        <span className="project-status-pill">Featured</span>
                      ) : (
                        <span className="project-status-pill project-status-pill--muted">Selected</span>
                      )}

                      <span className="project-status-pill project-status-pill--muted">
                        {p.panels?.length || 0} flows
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                          {p.title}
                        </h3>

                        <p className="text-white/40 text-sm leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="project-mini-stat">
                        <span>{p.highlights?.length || 0}</span>
                        <small>engineering notes</small>
                      </div>

                      <div className="project-mini-stat">
                        <span>{p.technologies.length}</span>
                        <small>tools in stack</small>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.technologies.slice(0, 5).map(technology => (
                        <span key={technology} className="project-tech-pill">
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      <button type="button" onClick={() => setSelected(p)} className="project-primary-action project-primary-action--compact">
                        <Eye size={15} /> Details
                      </button>

                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-action">
                          <ExternalLink size={15} /> Live
                        </a>
                      )}

                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-action">
                          <FaGithub size={15} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta-band">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-3 font-medium">
                More experiments
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                The rest of the archive lives on GitHub.
              </h3>

              <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-2xl">
                Browse additional builds, source code, and smaller explorations beyond the selected case studies shown here.
              </p>
            </div>

            <a
              href="https://github.com/rianhasansiam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FaGithub size={18} /> View GitHub
            </a>
          </div>
        </div>
      </div>

      {selected && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]" onClick={() => setSelected(null)} />

          <div className="fixed inset-4 md:inset-8 lg:inset-16 z-[201] overflow-auto">
            <div className="glass-card p-6 md:p-8 max-w-5xl mx-auto relative" style={{ background: 'rgba(10,10,30,0.95)' }}>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/30 hover:text-white bg-white/5 rounded-full p-2"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              </div>

              <h3 className="text-3xl font-bold gradient-text mb-4">
                {selected.title}
              </h3>

              <p className="text-white/40 leading-relaxed mb-6">
                {selected.longDescription || selected.description}
              </p>

              {selected.panels && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">
                    Platform Panels
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selected.panels.map(panel => (
                      <div key={panel.title} className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4">
                        <h5 className="text-sm font-semibold text-white mb-2">
                          {panel.title}
                        </h5>

                        <p className="text-sm leading-relaxed text-white/40">
                          {panel.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.highlights && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">
                    Engineering Focus
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selected.highlights.map(item => (
                      <div key={item} className="rounded-lg border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-3 text-sm text-white/60">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.technologies.map(technology => (
                  <span key={technology} className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/20 text-white/80 rounded-lg text-sm">
                    {technology}
                  </span>
                ))}
              </div>

              {selected.demoCredentials && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">
                    Demo Credentials
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selected.demoCredentials.map(credential => (
                      <div key={credential.role} className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4">
                        <p className="text-sm font-semibold text-white mb-2">
                          {credential.role}
                        </p>

                        <p className="text-sm text-white/50">
                          Email: {credential.email}
                        </p>

                        <p className="text-sm text-white/50">
                          Password: {credential.password}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {selected.liveUrl && (
                  <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}

                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                    <FaGithub size={18} /> Source
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