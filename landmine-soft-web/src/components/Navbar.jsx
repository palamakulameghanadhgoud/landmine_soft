import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md border-b border-white/20 backdrop-blur-xl' : 'backdrop-blur-md'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(27,16,63,0.86)' : 'rgba(27,16,63,0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img
              src="/landminelogo-CMvDdIuP.png"
              alt="Landmine Soft logo"
              className="w-24 h-15 rounded-lg object-cover"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <div key={to} className="relative">
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `interactive-link text-sm font-medium transition-colors no-underline ${
                      isActive ? '' : 'text-white/75 hover:text-white'
                    }`
                  }
                  style={({ isActive }) => (isActive ? { color: '#C4B5FD' } : {})}
                >
                  {label}
                </NavLink>
                <NavLink to={to} end={to === '/'} className="absolute inset-0">
                  {({ isActive }) =>
                    isActive ? (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute left-0 right-0 -bottom-2 h-0.5 rounded-full bg-violet-300"
                      />
                    ) : null
                  }
                </NavLink>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90 no-underline"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #0EA5E9 100%)',
                borderRadius: '8px',
              }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 shadow-lg backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(8,20,58,0.94)' }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                        isActive ? 'bg-violet-500/20' : 'text-white/80 hover:bg-white/10'
                      }`
                    }
                    style={({ isActive }) => (isActive ? { color: '#C4B5FD' } : {})}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.04 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 px-4 py-2.5 text-center text-sm font-semibold text-white rounded-lg no-underline block"
                  style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #0EA5E9 100%)', borderRadius: '8px' }}
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
