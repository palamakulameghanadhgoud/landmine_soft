import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GitFork, Link2, X, Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Backend & API',
  'Cloud Solutions',
  'AI Integration',
]

const socials = [
  { icon: GitFork, label: 'GitHub', href: 'https://github.com' },
  { icon: Link2, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: X, label: 'Twitter', href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(145deg, #1b103f 0%, #22164f 55%, #083247 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-4"
          >
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span className="text-lg font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Landmine Soft
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Building Software That Moves Businesses Forward
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2, rotate: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                    <Link
                      to={to}
                      className="interactive-link text-sm text-white/70 hover:text-white transition-colors no-underline"
                    >
                      {label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                    <Link
                      to="/services"
                      className="interactive-link text-sm text-white/70 hover:text-white transition-colors no-underline"
                    >
                      {s}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-white/50 mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@landminesoft.com"
                  className="text-sm text-white/70 hover:text-white transition-colors no-underline"
                >
                  hello@landminesoft.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-white/50 mt-0.5 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/70 hover:text-white transition-colors no-underline"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-white/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  4th Floor Tech Park,<br />Hyderabad, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Landmine Soft. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-sm text-white/60 hover:text-white no-underline">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-sm text-white/60 hover:text-white no-underline">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          <p className="text-sm text-white/50">Crafted with care in Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}
