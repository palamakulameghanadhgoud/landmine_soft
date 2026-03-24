import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import InteractiveCard from './InteractiveCard'

export default function TestimonialCard({ quote, name, role, company, rating = 5 }) {
  return (
    <InteractiveCard className="h-full" maxTilt={6}>
      <motion.div
        whileHover={{ y: -4, rotateX: 1, rotateY: 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card rounded-xl p-6 flex flex-col gap-4 h-full relative overflow-hidden"
        style={{ borderRadius: '12px' }}
      >
        <motion.div
          className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-indigo-100/45"
          animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.65, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="flex gap-1 relative z-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? '#F59E0B' : 'none'}
              style={{ color: i < rating ? '#F59E0B' : '#D1D5DB' }}
            />
          ))}
        </div>
        <p className="text-sm leading-relaxed italic text-pretty relative z-10" style={{ color: '#334155' }}>
          "{quote}"
        </p>
        <div className="mt-auto relative z-10">
          <p className="font-bold text-sm" style={{ color: '#0f172a', fontFamily: 'Sora, sans-serif' }}>
            {name}
          </p>
          <p className="text-xs mt-0.5 text-pretty" style={{ color: '#64748b' }}>
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </motion.div>
    </InteractiveCard>
  )
}
