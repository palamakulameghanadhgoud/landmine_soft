import { motion } from 'framer-motion'
import { Lightbulb, Shield, Eye, Award, Users, TrendingUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'
import ProfileCard from '../components/ProfileCard'
import Hero3DObject from '../components/Hero3DObject'

// Generate an SVG data URI showing initials as the card avatar image
function getAvatarDataUri(name, accentColor = '#2563EB') {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#060d22"/>
          <stop offset="100%" stop-color="#0d1b3e"/>
        </linearGradient>
        <linearGradient id="circle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#1e40af" stop-opacity="0.7"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="560" fill="url(#bg)"/>
      <ellipse cx="200" cy="320" rx="180" ry="160" fill="url(#glow)"/>
      <circle cx="200" cy="290" r="100" fill="url(#circle-grad)" opacity="0.85"/>
      <circle cx="200" cy="290" r="100" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <text
        x="200" y="310"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Sora, sans-serif"
        font-size="68"
        font-weight="700"
        fill="white"
        opacity="0.95"
      >${initials}</text>
    </svg>
  `
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const coreValues = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We embrace new technologies and creative problem-solving to deliver cutting-edge solutions that keep clients ahead of the curve.' },
  { icon: Shield, title: 'Integrity Always', desc: 'Honest communication, transparent pricing, and ethical practices are the foundation of every client relationship we build.' },
  { icon: Eye, title: 'Client Vision', desc: 'We listen deeply before we build. Understanding your goals ensures every line of code serves your business objectives.' },
  { icon: Award, title: 'Quality Obsessed', desc: 'Rigorous code reviews, automated testing, and performance audits ensure every product meets our high-quality bar.' },
  { icon: Users, title: 'Team Synergy', desc: 'Collaboration between designers, engineers, and strategists produces outcomes greater than any individual effort.' },
  { icon: TrendingUp, title: 'Continuous Growth', desc: 'We invest in our people and processes, staying ahead of industry trends so our clients benefit from the latest best practices.' },
]

const problems = [
  {
    title: 'Slow & Outdated Software',
    desc: 'Legacy systems drain productivity and drive users away. We modernize your tech stack, improving performance and reducing maintenance burden by up to 60%.',
    color: '#FFF7ED',
    accent: '#EA580C',
  },
  {
    title: 'Poor User Experience',
    desc: 'Confusing interfaces cost you conversions. Our UX research and design process creates intuitive products that users love and return to repeatedly.',
    color: '#F0FDF4',
    accent: '#16A34A',
  },
  {
    title: 'Missed Deadlines & Overruns',
    desc: 'Unpredictable development creates stress and budget pain. Our agile process with weekly demos and transparent tracking eliminates surprises.',
    color: '#EFF6FF',
    accent: '#2563EB',
  },
]

const team = [
  { name: 'Vikram Anand',    role: 'CEO & Co-Founder',          handle: 'vikramanand',  accent: '#2563EB' },
  { name: 'Sneha Patel',     role: 'CTO & Lead Architect',      handle: 'snehapatel',   accent: '#7C3AED' },
  { name: 'Rohan Desai',     role: 'Head of Design',            handle: 'rohandesai',   accent: '#0891B2' },
  { name: 'Meera Krishnan',  role: 'Senior Full-Stack Engineer', handle: 'meerak',      accent: '#059669' },
  { name: 'Arjun Reddy',    role: 'DevOps & Cloud Lead',        handle: 'arjunreddy',   accent: '#D97706' },
  { name: 'Pooja Nambiar',  role: 'Product Manager',            handle: 'poojanambiar', accent: '#DB2777' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
}

const orbitFloat = {
  animate: {
    y: [0, -14, 0, 10, 0],
    x: [0, 8, 0, -8, 0],
    rotate: [0, 2, 0, -2, 0],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: '#060d22' }}
      >
        <ThreeBackground />
        <motion.div
          className="absolute left-8 top-24 hidden lg:block h-24 w-24 rounded-full bg-blue-300/20 blur-xl"
          {...orbitFloat}
        />
        <motion.div
          className="absolute left-28 bottom-16 hidden lg:block h-28 w-28 rounded-full bg-indigo-300/20 blur-xl"
          animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-y-0 right-0 hidden lg:flex items-center justify-end pr-8 xl:pr-20 z-10">
          <Hero3DObject
            className="h-[300px] w-[300px] xl:h-[360px] xl:w-[360px] opacity-80"
            color="#60A5FA"
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
              Our Story
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              About Landmine Soft
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              We're a passionate software engineering studio building products that make a real difference for businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Vision & Mission
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-8 border-l-4"
              style={{ borderRadius: '12px', borderLeftColor: '#2563EB' }}
              whileHover={{ y: -4, rotateX: 1.2, rotateY: -1.2 }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                To be the most trusted software development partner for ambitious businesses — one where technology becomes a competitive advantage, not a burden. We envision a world where every company, regardless of size, has access to world-class digital products built with precision and purpose.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-8 border-l-4"
              style={{ borderRadius: '12px', borderLeftColor: '#1A3C6E' }}
              whileHover={{ y: -4, rotateX: -1.2, rotateY: 1.2 }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                To deliver elegant, scalable, and impactful software solutions through deep client collaboration, engineering excellence, and a relentless focus on business outcomes. Every project we take on is an opportunity to create something that lasts and performs when it matters most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
                Our Story
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>
                Landmine Soft was founded in 2019 by a group of engineers who were frustrated by one recurring theme in their careers: great ideas dying because of poor execution. Too many companies had the vision but lacked the technical partner capable of bringing it to life reliably.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>
                Starting with just four people and a handful of clients in Hyderabad, we obsessed over quality, communication, and delivery. Word spread quickly. Within two years we had grown to a team of 25 and delivered projects for clients across fintech, healthcare, retail, and SaaS.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                Today, Landmine Soft operates as a full-service software studio with 50+ projects shipped, a 99% client satisfaction rate, and a growing team of engineers, designers, and product specialists who share a single goal: software that moves businesses forward.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
              style={{ borderRadius: '12px', height: '320px', backgroundColor: '#DBEAFE' }}
              whileHover={{ scale: 1.02, rotate: -1.2 }}
            >
              <div className="w-full h-full flex items-center justify-center flex-col gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#BFDBFE' }}
                >
                  <Users size={32} style={{ color: '#2563EB' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: '#1D4ED8' }}>Team Photo Placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Problems We Solve
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              We specialize in eliminating the technical headaches that hold businesses back.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map(({ title, desc, color, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6 border-t-4"
                style={{ borderRadius: '12px', borderTopColor: accent }}
                whileHover={{ y: -5, rotateZ: i % 2 === 0 ? 0.6 : -0.6 }}
              >
                <h4 className="font-bold text-base mb-3" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Our Core Values
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              The principles that guide every decision we make.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-3"
                style={{ borderRadius: '12px' }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <Icon size={20} style={{ color: '#2563EB' }} />
                </div>
                <h4 className="font-semibold text-base" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              Meet the Team
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              The talented people behind every great product we ship.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {team.map(({ name, role, handle, accent }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ width: '100%', maxWidth: '280px' }}
              >
                <ProfileCard
                  name={name}
                  title={role}
                  handle={handle}
                  status="Landmine Soft"
                  contactText="LinkedIn"
                  avatarUrl={getAvatarDataUri(name, accent)}
                  miniAvatarUrl={getAvatarDataUri(name, accent)}
                  behindGlowColor={`${accent}88`}
                  enableTilt={true}
                  subduedEffect={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
