import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function CoreMesh({ color = '#93C5FD' }) {
  const ref = useRef(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.35
  })

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.34, 96, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.55}
        roughness={0.22}
        emissive={color}
        emissiveIntensity={0.22}
      />
    </mesh>
  )
}

export default function Hero3DObject({ className = '', color = '#93C5FD' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 4.5], fov: 44 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={1.15} />
        <pointLight position={[-2, -2, 2]} color="#60A5FA" intensity={1} />
        <Suspense fallback={null}>
          <Float speed={1.25} floatIntensity={1.2} rotationIntensity={0.6}>
            <CoreMesh color={color} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}
