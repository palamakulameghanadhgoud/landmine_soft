import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'
import InputField from '../components/InputField'
import Hero3DObject from '../components/Hero3DObject'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@landminesoft.com', 'support@landminesoft.com'],
    href: 'mailto:hello@landminesoft.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 40 1234 5678'],
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['4th Floor, Tech Park', 'Hyderabad, Telangana 500081'],
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 9:00 AM – 7:00 PM', 'Sat: 10:00 AM – 3:00 PM'],
    href: null,
  },
]

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required'
  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required'
  if (!fields.message.trim()) errors.message = 'Message is required'
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: '#060d22' }}
      >
        <ThreeBackground />
        <motion.div
          className="absolute left-10 top-24 hidden lg:block h-24 w-24 rounded-full bg-cyan-300/20 blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-24 bottom-16 hidden lg:block h-14 w-14 rounded-full border border-sky-200/40"
          animate={{ scale: [1, 1.25, 1], y: [0, -6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-y-0 right-0 hidden lg:flex items-center justify-end pr-8 xl:pr-20 z-10">
          <Hero3DObject
            className="h-[280px] w-[280px] xl:h-[340px] xl:w-[340px] opacity-75"
            color="#BFDBFE"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
            >
              Let's Talk
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Contact Us
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-8"
            style={{ borderRadius: '12px' }}
            whileHover={{ y: -4 }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}
            >
              Send Us a Message
            </h2>

            {submitted ? (
              <div
                className="rounded-xl p-6 text-center"
                style={{ backgroundColor: '#F0FDF4', borderRadius: '12px' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#DCFCE7' }}
                >
                  <Send size={24} style={{ color: '#16A34A' }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold underline"
                  style={{ color: '#2563EB' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <InputField
                  label="Full Name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange('name')}
                  error={errors.name}
                />
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  error={errors.email}
                />
                <InputField
                  label="Subject"
                  placeholder="Project inquiry, partnership, etc."
                  value={form.subject}
                  onChange={handleChange('subject')}
                  error={errors.subject}
                />
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={form.message}
                    onChange={handleChange('message')}
                    rows={5}
                    className={`w-full px-4 py-3 text-sm outline-none transition-all focus:ring-2 resize-none border ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                    }`}
                    style={{ borderRadius: '8px' }}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="mb-4">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}
              >
                Get in Touch
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We typically respond to all inquiries within one business day. For urgent matters, feel free to call us directly.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, title, lines, href }, idx) => (
              <motion.div
                key={title}
                className="bg-white rounded-xl shadow-sm p-5 flex items-start gap-4"
                style={{ borderRadius: '12px' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <Icon size={18} style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#111827', fontFamily: 'Sora, sans-serif' }}>
                    {title}
                  </h4>
                  {lines.map((line) => (
                    href ? (
                      <a
                        key={line}
                        href={href}
                        className="block text-sm no-underline hover:opacity-70 transition-opacity"
                        style={{ color: '#6B7280' }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm" style={{ color: '#6B7280' }}>{line}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div
              className="rounded-xl overflow-hidden flex items-center justify-center"
              style={{ height: '160px', backgroundColor: '#DBEAFE', borderRadius: '12px' }}
            >
              <motion.div
                className="text-center"
                animate={{ y: [0, -4, 0], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MapPin size={28} style={{ color: '#2563EB' }} className="mx-auto mb-2" />
                <p className="text-sm font-medium" style={{ color: '#1D4ED8' }}>Map Placeholder</p>
                <p className="text-xs" style={{ color: '#3B82F6' }}>Hyderabad, Telangana</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
