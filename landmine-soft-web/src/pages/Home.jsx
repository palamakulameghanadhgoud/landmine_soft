import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Palette,
  Server,
  Cloud,
  Brain,
  ArrowRight,
  Sparkles,
  Layers3,
  Rocket,
  Cpu,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import ThreeBackground from '../components/ThreeBackground'
import Hero3DObject from '../components/Hero3DObject'

const services = [
  { icon: Globe, title: 'Web Engineering', description: 'Fluid, high-performance web platforms with premium UX and measurable conversion impact.' },
  { icon: Smartphone, title: 'Mobile Experiences', description: 'iOS and Android apps that feel native, fast, and delight users from first tap.' },
  { icon: Palette, title: 'UI/UX Systems', description: 'Design systems and interactions that feel cinematic, intuitive, and unmistakably yours.' },
  { icon: Server, title: 'Backend Architecture', description: 'Reliable APIs and distributed services built for scale, security, and velocity.' },
  { icon: Cloud, title: 'Cloud + DevOps', description: 'Cloud-native infrastructure, CI/CD pipelines, and production observability from day one.' },
  { icon: Brain, title: 'AI Product Layer', description: 'Smart workflows and AI features integrated directly into the product experience.' },
]

const storyCards = [
  {
    icon: Layers3,
    title: 'Design That Feels Alive',
    text: 'Depth, motion, and hierarchy are orchestrated to guide attention and create emotional impact.',
  },
  {
    icon: Cpu,
    title: 'Engineering-Grade Performance',
    text: 'Every visual layer is optimized to keep interactions smooth even on constrained devices.',
  },
  {
    icon: Rocket,
    title: 'Built to Move Business',
    text: 'Aesthetic quality is paired with strong product thinking and conversion-focused execution.',
  },
]

const testimonials = [
  {
    quote: 'We asked for premium and got world-class. The new experience instantly elevated how users perceive our brand.',
    name: 'Arjun Mehta',
    role: 'CTO',
    company: 'RetailEdge Solutions',
    rating: 5,
  },
  {
    quote: 'The animation and 3D direction feels intentional, not gimmicky. It finally looks like a top-tier product company.',
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'HealthTrack Inc.',
    rating: 5,
  },
  {
    quote: 'Beautiful, fast, and coherent across devices. This is exactly the level we needed.',
    name: 'Rahul Nair',
    role: 'Head of Engineering',
    company: 'DataFlow Analytics',
    rating: 5,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const sectionReveal = {
  hidden: { opacity: 0, y: 36, clipPath: 'inset(0 0 16% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
}

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let current = 0
    const step = target / 65
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(current))
      }
    }, 18)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden flex items-center">
        <ThreeBackground orbColor="#93C5FD" />

        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex items-center pr-8 xl:pr-16 z-10">
          <Hero3DObject className="h-[360px] w-[360px] xl:h-[440px] xl:w-[440px] opacity-90" color="#BFDBFE" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/85">
              <Sparkles size={14} />
              Premium Digital Product Studio
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
              We Craft
              <span className="block bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
                Mind-Blowing 3D Web Experiences
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/75 max-w-2xl text-pretty">
              Landmine Soft blends cinematic motion, interactive 3D, and high-performance engineering to build websites that feel unforgettable and convert like top-tier products.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2563EB, #4338CA)' }}
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white no-underline border border-white/35 bg-white/10 hover:bg-white/20 transition-colors"
              >
                Explore Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-14 overflow-hidden bg-slate-950">
        <ThreeBackground orbColor="#60A5FA" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Products Shipped', value: 60, suffix: '+' },
              { label: 'Client Satisfaction', value: 99, suffix: '%' },
              { label: 'Avg Lighthouse Perf', value: 95, suffix: '+' },
              { label: 'Design-Dev Team', value: 30, suffix: '+' },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 22, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 130, damping: 18 } },
                }}
              >
                <p className="text-4xl font-extrabold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  <Counter target={item.value} suffix={item.suffix} />
                </p>
                <p className="text-sm text-white/60 mt-1 text-balance">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">A Better-Than-Template Product Aesthetic</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-pretty">
              Strong visual identity, purposeful motion, and technically clean implementation. No generic blocks. No random effects.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {storyCards.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 24, rotate: index % 2 === 0 ? -1 : 1 },
                  visible: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } },
                }}
                className="surface-card rounded-xl p-7 relative overflow-hidden"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-blue-100/70" />
                <div className="relative z-10">
                  <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon size={22} className="text-blue-700" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-slate-900 text-balance">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 text-pretty">{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">What We Build</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-pretty">
              Full-spectrum development with top-tier design and serious engineering.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 18, x: index % 2 ? 8 : -8 },
                  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">Trusted by Ambitious Teams</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 20, rotate: index % 2 === 0 ? -0.8 : 0.8 },
                  visible: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 125, damping: 18 } },
                }}
              >
                <TestimonialCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <ThreeBackground orbColor="#93C5FD" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-balance">
              Ready to Make Your Website Impossible to Ignore?
            </h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto text-pretty">
              Let’s design a 3D product experience that looks world-class and performs world-class.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg font-bold text-white no-underline border border-white/40 bg-white/15 hover:bg-white/25 transition-colors"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
