import { motion } from 'framer-motion'
import InteractiveCard from './InteractiveCard'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <InteractiveCard className="h-full">
      <motion.div
        whileHover={{ y: -4, rotateX: 1.2, rotateY: -1.2 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card rounded-xl p-6 flex flex-col gap-4 h-full relative overflow-hidden"
        style={{ borderRadius: '12px' }}
      >
        <motion.div
          className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-blue-100/55"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="size-12 flex items-center justify-center rounded-full relative z-10"
          style={{ backgroundColor: '#DBEAFE' }}
        >
          {Icon && <Icon size={24} style={{ color: '#2563EB' }} />}
        </div>
        <h3 className="text-lg font-semibold text-balance relative z-10" style={{ fontFamily: 'Sora, sans-serif', color: '#0f172a' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-pretty relative z-10" style={{ color: '#64748b' }}>
          {description}
        </p>
      </motion.div>
    </InteractiveCard>
  )
}
