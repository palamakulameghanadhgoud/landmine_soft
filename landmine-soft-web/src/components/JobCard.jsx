import { motion } from 'framer-motion'
import { MapPin, Briefcase, Building2 } from 'lucide-react'
import InteractiveCard from './InteractiveCard'

export default function JobCard({ title, department, location, type, description, onApply }) {
  const typeStyles = {
    'Full-time': { backgroundColor: '#DCFCE7', color: '#166534' },
    'Internship': { backgroundColor: '#FEF9C3', color: '#854D0E' },
    'Part-time': { backgroundColor: '#E0F2FE', color: '#075985' },
    'Contract': { backgroundColor: '#F3E8FF', color: '#6B21A8' },
  }

  const typeStyle = typeStyles[type] || { backgroundColor: '#F3F4F6', color: '#374151' }

  return (
    <InteractiveCard className="h-full" maxTilt={5}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="surface-card rounded-xl p-6 flex flex-col gap-4 h-full relative overflow-hidden"
        style={{ borderRadius: '12px' }}
      >
        <div className="absolute -right-20 top-8 h-40 w-40 rounded-full bg-blue-100/40" />
        <div className="relative z-10">
          <h3 className="font-bold text-lg text-balance" style={{ fontFamily: 'Sora, sans-serif', color: '#0f172a' }}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <span
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8' }}
            >
              <Building2 size={12} /> {department}
            </span>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F3F4F6', color: '#374151' }}
            >
              <MapPin size={12} /> {location}
            </span>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
              style={typeStyle}
            >
              <Briefcase size={12} /> {type}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-pretty relative z-10" style={{ color: '#64748b' }}>
          {description}
        </p>
        <button
          onClick={onApply}
          className="mt-auto self-start px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90 btn-brand relative z-10"
          style={{ borderRadius: '8px' }}
        >
          Apply Now
        </button>
      </motion.div>
    </InteractiveCard>
  )
}
