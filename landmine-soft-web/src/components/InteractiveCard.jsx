import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveCard({
  children,
  className = '',
  maxTilt = 7,
  hoverScale = 1.01,
}) {
  const cardRef = useRef(null)

  const handleMove = (event) => {
    if (!cardRef.current || window.matchMedia('(hover: none)').matches) return

    const rect = cardRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    const rotateY = (px - 0.5) * maxTilt * 2
    const rotateX = (0.5 - py) * maxTilt * 2

    cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${hoverScale})`
  }

  const reset = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${className} transition-transform duration-200 ease-out will-change-transform`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
