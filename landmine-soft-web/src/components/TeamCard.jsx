import { motion } from 'framer-motion'
import { Link2, X } from 'lucide-react'
import InteractiveCard from './InteractiveCard'

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function TeamCard({ name, role }) {
  return (
    <InteractiveCard maxTilt={8}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="surface-card rounded-xl p-6 flex flex-col items-center gap-3 text-center relative overflow-hidden"
        style={{ borderRadius: '12px' }}
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-blue-100/60" />
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold relative z-10"
          style={{ backgroundColor: '#2563EB', fontFamily: 'Sora, sans-serif' }}
        >
          {getInitials(name)}
        </div>
        <div className="relative z-10">
          <h4 className="font-bold text-base" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
            {name}
          </h4>
          <p className="text-sm mt-0.5" style={{ color: '#6B7280' }}>
            {role}
          </p>
        </div>
        <div className="flex gap-3 mt-1 relative z-10">
          <a
            href="#"
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#2563EB' }}
            aria-label="LinkedIn"
          >
            <Link2 size={18} />
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#2563EB' }}
            aria-label="Twitter"
          >
            <X size={18} />
          </a>
        </div>
      </motion.div>
    </InteractiveCard>
  )
}
