"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
        scrolled
          ? "bg-[#050510]/90 border-b border-white/[0.04] shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                <Image
                  src="/rianface.jpg"
                  alt="R"
                  fill
                  sizes="40px"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-lg hidden sm:block tracking-wide">
                Rian<span className="gradient-text">Hasan</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white/40 hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-white/[0.03] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="relative">{item.name}</span>
              </Link>
            ))}
            <a
              href="/Rian_Hasan_Siam_CV.pdf"
              download
              className="ml-4 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-white p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#070716] ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 py-6 border-t border-white/[0.04]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white text-sm font-medium py-2 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Rian_Hasan_Siam_CV.pdf"
              download
              className="mt-2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
