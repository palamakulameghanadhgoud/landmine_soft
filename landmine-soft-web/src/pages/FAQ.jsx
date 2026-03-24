import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'

const faqItems = [
  {
    q: 'What services does Landmine Soft provide?',
    a: 'We provide web development, mobile app development, UI/UX design, backend/API engineering, cloud/DevOps, and AI integration services.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects run between 4 to 16 weeks depending on complexity, scope, and required integrations. We share a clear timeline after discovery.',
  },
  {
    q: 'Do you work with startups and enterprise clients?',
    a: 'Yes. We collaborate with both early-stage startups and larger organizations, adapting process and communication to match your team structure.',
  },
  {
    q: 'Can you take over an existing codebase?',
    a: 'Absolutely. We can audit, stabilize, and improve existing products while preserving business continuity and planning safe modernization.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. We offer post-launch support, monitoring, and iterative enhancement plans to keep your product secure, fast, and evolving.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ThreeBackground orbColor="#a78bfa" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-balance">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/75 text-pretty">
            Quick answers about how we work, timelines, and delivery.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = idx === openIndex
            return (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="surface-card rounded-xl overflow-hidden"
                style={{ borderRadius: '12px' }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  type="button"
                >
                  <span className="font-semibold text-slate-900">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
