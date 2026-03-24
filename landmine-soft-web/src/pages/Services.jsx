import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Palette, Server, Cloud, Brain, ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'
import Hero3DObject from '../components/Hero3DObject'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'We build fast, secure, and scalable web applications tailored to your business. From customer-facing portals to complex internal tools, our engineering team leverages React, Next.js, and Node.js to deliver products that perform under pressure and grow with you.',
    features: ['Responsive design across all devices', 'SEO-optimized architecture', 'Real-time features & WebSocket integration', 'Progressive Web App (PWA) support'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile apps that users love. Using Flutter and React Native, we deliver high-quality iOS and Android applications with native performance, offline capabilities, and seamless platform integrations for payments, maps, and notifications.',
    features: ['iOS & Android from a single codebase', 'App Store & Google Play publishing', 'Push notifications & deep linking', 'Biometric authentication & secure storage'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: "User experience isn't an afterthought — it's the foundation of every product we design. Our design team conducts user research, creates detailed wireframes and interactive prototypes in Figma, and iterates based on real feedback before a single line of code is written.",
    features: ['User research & persona development', 'Wireframing & interactive prototyping', 'Design system creation', 'Usability testing & iteration'],
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'The engine behind great products. We architect robust backend systems using Node.js, Python (FastAPI/Django), and Go that handle millions of requests reliably. Our API-first approach ensures your platform integrates seamlessly with third-party tools and future products.',
    features: ['RESTful & GraphQL API design', 'Microservices architecture', 'Database design (SQL & NoSQL)', 'OAuth2 & JWT authentication'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable, cost-optimized cloud infrastructure on AWS and GCP. We design, deploy, and manage cloud environments with auto-scaling, disaster recovery, and 99.9% uptime SLAs. Our DevOps engineers implement CI/CD pipelines so your team ships faster with confidence.',
    features: ['AWS & GCP architecture design', 'Docker & Kubernetes orchestration', 'CI/CD pipeline setup (GitHub Actions, Jenkins)', 'Cost optimization & monitoring'],
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Bring intelligence to your product without building AI from scratch. We integrate LLMs (OpenAI, Anthropic, Gemini), build custom ML models, and implement computer vision and NLP pipelines. From chatbots to predictive analytics, we make AI practical and production-ready.',
    features: ['LLM integration & prompt engineering', 'Custom ML model development', 'AI-powered search & recommendations', 'Data pipeline & ETL automation'],
  },
]

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We deep-dive into your business, goals, users, and existing systems. This phase produces a detailed requirements document and project scope.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our designers create wireframes, user flows, and high-fidelity prototypes reviewed and approved by your stakeholders before development begins.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Engineers build in two-week agile sprints with weekly demos, continuous integration, and code reviews ensuring quality at every step.',
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'After QA testing and UAT sign-off, we deploy to production and provide 30 days of post-launch support, monitoring, and bug fixes.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
}

export default function Services() {
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
          className="absolute left-6 top-24 hidden lg:block h-24 w-24 rounded-2xl border border-blue-300/30"
          animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-24 bottom-16 hidden lg:block h-16 w-16 rounded-full border border-indigo-200/40"
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
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
              What We Offer
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Our Services
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Full-spectrum software development services — from concept to launch and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {services.map(({ icon: Icon, title, description, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              style={{ borderRadius: '12px' }}
              whileHover={{ y: -6, scale: 1.005 }}
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#EFF6FF' }}
                  >
                    <Icon size={24} style={{ color: '#2563EB' }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}
                  >
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-semibold text-white rounded-lg no-underline hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ color: '#1A3C6E' }}>
                  Key Features
                </h4>
                <ul className="flex flex-col gap-3">
                  {features.map((f, fi) => (
                    <motion.li
                      key={f}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i * 0.06) + (fi * 0.04), duration: 0.35 }}
                    >
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: '#2563EB' }} />
                      <span className="text-sm leading-relaxed" style={{ color: '#374151' }}>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}>
              How We Work
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              Our proven four-step process ensures predictable delivery and outstanding results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 relative"
                style={{ borderRadius: '12px' }}
                whileHover={{ y: -5, rotate: i % 2 === 0 ? 0.8 : -0.8 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-extrabold text-white mb-4"
                  style={{ backgroundColor: '#1A3C6E', fontFamily: 'Sora, sans-serif' }}
                >
                  {num}
                </div>
                <h4 className="font-bold text-base mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5"
                    style={{ backgroundColor: '#BFDBFE' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: '#060d22' }}
      >
        <ThreeBackground orbColor="#93C5FD" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-lg mx-auto">
              Share your requirements and we'll get back with a detailed proposal within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-sm font-bold rounded-lg no-underline transition-all hover:opacity-90"
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                borderRadius: '8px',
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
