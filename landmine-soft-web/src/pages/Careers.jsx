import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Heart, Home, BookOpen, Star, TrendingUp, X, Upload, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'
import JobCard from '../components/JobCard'
import InputField from '../components/InputField'
import Hero3DObject from '../components/Hero3DObject'

const culture = [
  {
    emoji: '🚀',
    title: 'Learn & Grow',
    desc: 'Dedicated learning budget, conference attendance, and in-house tech talks keep you ahead of the curve. We invest in your growth as a professional.',
    color: '#EFF6FF',
    accent: '#2563EB',
  },
  {
    emoji: '🏡',
    title: 'Flexible Work',
    desc: 'Remote-friendly policies with flexible hours. We trust our team to deliver results, not just clock hours. Work from wherever you do your best thinking.',
    color: '#F0FDF4',
    accent: '#16A34A',
  },
  {
    emoji: '🤝',
    title: 'Great Team',
    desc: 'Collaborative, low-ego, high-trust environment. Regular team offsites, hackathons, and culture events build genuine connections beyond the screen.',
    color: '#FFF7ED',
    accent: '#EA580C',
  },
]

const benefits = [
  { icon: DollarSign, title: 'Competitive Pay', desc: 'Market-beating salaries benchmarked quarterly, plus performance bonuses.' },
  { icon: Heart, title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: Home, title: 'Remote First', desc: 'Work from home, a co-working space, or our Hyderabad office — your choice.' },
  { icon: BookOpen, title: 'Learning Budget', desc: '₹30,000/year for courses, books, certifications, and conferences.' },
  { icon: Star, title: 'Recognition', desc: 'Quarterly awards, shoutouts, and clear paths to senior and lead roles.' },
  { icon: TrendingUp, title: 'Equity Options', desc: 'ESOPs for senior roles — grow with the company as we scale.' },
]

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    description: 'We are looking for a seasoned React developer to lead frontend development on our flagship SaaS products. You will architect scalable component systems, mentor junior engineers, and collaborate closely with product and design.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Hyderabad / Hybrid',
    type: 'Full-time',
    description: 'Join our design team to craft beautiful, intuitive interfaces for complex products. You will own end-to-end design from user research and wireframing to polished Figma prototypes and developer handoff.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain cloud infrastructure on AWS and GCP. Manage CI/CD pipelines, Kubernetes clusters, and monitoring systems that power products used by thousands of users daily.',
  },
  {
    id: 4,
    title: 'Software Engineering Intern',
    department: 'Engineering',
    location: 'Hyderabad',
    type: 'Internship',
    description: 'A 6-month paid internship for final-year students and recent graduates. Work on real products, get mentored by senior engineers, and develop the skills that top software companies look for.',
  },
]

function validateModal(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required'
  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email'
  }
  if (!fields.resume) errors.resume = 'Please attach your resume'
  return errors
}

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', resume: null })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    setForm((prev) => ({ ...prev, resume: file || null }))
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validateModal(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
        style={{ borderRadius: '12px' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#DCFCE7' }}
            >
              <Send size={24} style={{ color: '#16A34A' }} />
            </div>
            <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
              Application Submitted!
            </h3>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
              Thank you for applying for <strong>{job.title}</strong>. We'll review your application and get back to you within 5–7 business days.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg"
              style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              className="text-xl font-bold mb-1"
              style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}
            >
              Apply for {job.title}
            </h2>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
              {job.department} · {job.location}
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <InputField
                label="Full Name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
              />
              <InputField
                label="Email Address"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange('email')}
                error={errors.email}
              />

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
                  Resume / CV
                </label>
                <label
                  className="flex items-center gap-3 px-4 py-3 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                  style={{ borderRadius: '8px' }}
                >
                  <Upload size={18} style={{ color: '#6B7280' }} />
                  <span className="text-sm" style={{ color: '#6B7280' }}>
                    {form.resume ? form.resume.name : 'Attach PDF or DOCX (max 5 MB)'}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFile}
                  />
                </label>
                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 text-sm font-semibold rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                  style={{ borderRadius: '8px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 text-sm font-bold text-white rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)

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
          className="absolute left-8 top-24 hidden lg:block h-20 w-20 rounded-2xl bg-violet-300/20"
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-24 bottom-14 hidden lg:block h-12 w-12 rounded-full bg-blue-300/25"
          animate={{ y: [0, 12, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-y-0 right-0 hidden lg:flex items-center justify-end pr-8 xl:pr-20 z-10">
          <Hero3DObject
            className="h-[300px] w-[300px] xl:h-[360px] xl:w-[360px] opacity-80"
            color="#93C5FD"
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
              We're Hiring
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Join Our Team
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Build world-class products, grow your career, and do the best work of your life alongside talented people who genuinely care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Life at Landmine Soft
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              We've built a culture where talented people thrive.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culture.map(({ emoji, title, desc, color, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-7 text-center"
                style={{ borderRadius: '12px' }}
                whileHover={{ y: -6, scale: 1.01, rotate: i % 2 === 0 ? 0.7 : -0.7 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ backgroundColor: color }}
                >
                  {emoji}
                </div>
                <h4 className="font-bold text-lg mb-3" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Benefits & Perks
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              We take care of our people so they can do their best work.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 flex gap-4 items-start"
                style={{ borderRadius: '12px' }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#DBEAFE' }}
                >
                  <Icon size={18} style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Open Positions
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              Find your next role and help us build software that matters.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <JobCard
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                  onApply={() => setSelectedJob(job)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Don't see a role that fits? We're always looking for exceptional people.
            </p>
            <a
              href="mailto:careers@landminesoft.com"
              className="inline-block mt-3 text-sm font-semibold no-underline hover:opacity-70 transition-opacity"
              style={{ color: '#2563EB' }}
            >
              Send us your resume →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedJob && (
          <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
