# 🚀 Rian Hasan Siam - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my journey as a Full Stack Developer with interactive animations, real email functionality, and comprehensive SEO optimization.

## 🌟 Live Demo

🔗 **Website**: [https://rianhasansiam.me](https://rianhasansiam.me)

## � Preview

A beautifully designed portfolio featuring:
- **Interactive Hero Section** with animated backgrounds and typewriter effects
- **Skills Showcase** with star ratings and smooth animations
- **Project Gallery** with hover effects and live demos
- **About Section** with personal interests and goals
- **Contact Form** with real email functionality via EmailJS
- **Comprehensive SEO** with structured data and meta tags
- **Fully Responsive** design for all devices

## 🛠️ Built With

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Animation & Interaction
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React
- **[React Type Animation](https://react-type-animation.netlify.app/)** - Typewriter effect animations
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll-triggered animations
- **[AOS](https://michalsnik.github.io/aos/)** - Animate On Scroll library

### Icons & UI
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icons as React components

### Email & Notifications
- **[EmailJS](https://www.emailjs.com/)** - Send emails directly from client-side
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## ✨ Features

### 🎨 **Modern Design**
- Clean, minimalist interface with glass morphism effects
- Beautiful gradient backgrounds and color schemes
- Smooth transitions and micro-interactions
- Dark theme with vibrant accent colors

### 📱 **Responsive & Accessible**
- Mobile-first design approach
- Optimized for all screen sizes (320px to 4K)
- Accessible navigation with keyboard support
- WCAG 2.1 AA compliance

### 🎯 **Interactive Elements**
- Animated skill cards with 5-star rating system
- Project filtering by technology and category
- Smooth scrolling navigation with active state indicators
- Hover effects and animated transitions

### 📧 **Real Email Functionality**
- Working contact form integrated with EmailJS
- Real-time form validation and error handling
- Success/error notifications with toast messages
- Retry mechanism for failed email sends

### 🔍 **SEO & Performance Optimized**
- Comprehensive meta tags and Open Graph data
- Structured data markup (JSON-LD Person schema)
- XML sitemap and robots.txt
- Twitter Cards and social media optimization
- Lighthouse score: 95+ across all metrics
- Core Web Vitals optimized

### 🚀 **Technical Excellence**
- Next.js 14 with App Router for optimal performance
- Server-side rendering and static generation
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- PWA-ready with manifest file

## � Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.js                 # Root layout with SEO metadata
│   ├── page.js                   # Home page component
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── robots.txt/               # SEO robots.txt route
│   ├── sitemap.xml/              # SEO XML sitemap route
│   └── site.webmanifest/         # PWA manifest route
├── components/
│   ├── Navbar.js                 # Navigation component
│   ├── Hero.js                   # Hero section with animations
│   ├── Skills.js                 # Skills showcase with star ratings
│   ├── Projects.js               # Project gallery with filtering
│   ├── About.js                  # About section with interests
│   ├── Contact.js                # Contact form with EmailJS
│   ├── Footer.js                 # Footer component
│   └── SEOHead.js                # SEO metadata component
├── public/
│   ├── images/                   # Profile and project images
│   ├── icons/                    # Favicons and PWA icons
│   └── *.png, *.pdf              # Static assets
├── lib/                          # Utility functions and helpers
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed on your machine
- **npm** or **yarn** package manager
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/rianhasansiam/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up EmailJS credentials**
   
   Update the EmailJS credentials directly in the `Contact.js` file:
   ```javascript
   // Inside the Contact.js file
   const serviceId = 'your_service_id_here';
   const templateId = 'your_template_id_here';
   const publicKey = 'your_public_key_here';
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```


## 📧 EmailJS Setup Guide

To enable the contact form functionality:

1. **Create EmailJS Account**
   - Visit [EmailJS.com](https://www.emailjs.com/) and create an account
   - It's free for up to 200 emails per month

2. **Set up Email Service**
   - Go to Email Services and connect your email (Gmail, Outlook, etc.)
   - Note down your **Service ID**

3. **Create Email Template**
   - Go to Email Templates and create a new template
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     Message: {{message}}
     ```
   - Note down your **Template ID**

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy your **Public Key**

5. **Update EmailJS credentials directly in the code**
   ```javascript
   // In components/Contact.js
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';  
   const publicKey = 'your_public_key';
   ```

## 🎨 Customization Guide

### **Personal Information**
Update your details in the following files:
- `components/Hero.js` - Name, title, and intro
- `components/About.js` - About text and interests
- `components/Skills.js` - Your skills and experience
- `components/Projects.js` - Your projects and demos
- `app/layout.js` - SEO metadata and personal info

### **Styling & Colors**
- `tailwind.config.js` - Extend colors and add custom styles
- `app/globals.css` - Global CSS variables and custom styles
- Component files - Update className props for styling

### **Images & Assets**
- Replace images in `/public/` folder
- Update image paths in components
- Add your own favicon and og-image

### **SEO & Metadata**
- `app/layout.js` - Update site metadata
- `app/sitemap.xml/route.js` - Add your domain
- `app/robots.txt/route.js` - Configure crawling rules

## 📱 Responsive Design

Fully responsive and optimized for:
- **📱 Mobile devices** (320px and up)
- **📟 Tablets** (768px and up)  
- **💻 Laptops** (1024px and up)
- **🖥️ Desktops** (1200px and up)

## 📊 Performance & SEO

### **Lighthouse Scores**
- 🚀 **Performance**: 95+
- ♿ **Accessibility**: 100
- ✅ **Best Practices**: 100
- 🔍 **SEO**: 100

### **Core Web Vitals**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### **SEO Features**
- Meta tags and Open Graph data
- JSON-LD structured data
- XML sitemap and robots.txt
- Twitter Cards
- Canonical URLs

## 🚀 Deployment Guide

### **Vercel (Recommended)**
1. **Fork/Clone** this repository
2. **Connect** to [Vercel](https://vercel.com/)
3. **Add EmailJS credentials directly in Contact.js**
   - Update `components/Contact.js` with your EmailJS credentials:
   ```javascript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```
4. **Deploy** automatically!

### **Netlify**
1. **Build** the project: `npm run build`
2. **Deploy** the `out` folder to Netlify
3. **Update EmailJS credentials directly in Contact.js**

### **Other Platforms**
- Works with any static hosting service
- Build with `npm run build`
- Deploy the generated files

## � Browser Support

- ✅ **Chrome** (latest)
- ✅ **Firefox** (latest)
- ✅ **Safari** (latest)  
- ✅ **Edge** (latest)
- ✅ **Mobile browsers**

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## � License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**Rian Hasan Siam** - Full Stack Developer passionate about creating innovative web solutions.

- 🌐 **Website**: [rianhasansiam.me](https://rianhasansiam.me)
- 📧 **Email**: rianhasan1971@gmail.com
- 💼 **LinkedIn**: [rian-hasan-siam](https://linkedin.com/in/rian-hasan-siam)
- 🐱 **GitHub**: [rianhasansiam](https://github.com/rianhasansiam)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and UI/UX best practices
- **Icons**: [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) community examples
- **Framework**: Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Powered by [Vercel](https://vercel.com/)

## 🚀 What's Next?

- [ ] Add blog section with MDX support
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive animations
- [ ] Create admin panel for content management
- [ ] Add analytics and performance monitoring

---

⭐ **Star this repo if you found it helpful!**

Built with ❤️ by **Rian Hasan Siam**
