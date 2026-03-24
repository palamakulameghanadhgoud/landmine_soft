import { useEffect, useRef } from 'react'

/**
 * DarkVeil — animated dark aurora/veil background.
 * Uses CSS keyframe blobs + a canvas-rendered noise layer for depth.
 */
export default function DarkVeil({ className = '', style = {} }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1b3e 40%, #060d22 100%)',
        }}
      />

      {/* Animated veil blobs */}
      <div className="veil-blob veil-blob-1" />
      <div className="veil-blob veil-blob-2" />
      <div className="veil-blob veil-blob-3" />
      <div className="veil-blob veil-blob-4" />

      {/* Grain overlay */}
      <div className="veil-grain" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
