import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function OrbitalGroup({ count = 8, radius = 4.5, color = '#60A5FA' }) {
  const groupRef = useRef(null)

  const nodes = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const angle = (index / count) * Math.PI * 2
      const y = THREE.MathUtils.randFloatSpread(3.2)
      const scale = THREE.MathUtils.randFloat(0.22, 0.58)
      const speed = THREE.MathUtils.randFloat(0.08, 0.22)
      const orbitOffset = THREE.MathUtils.randFloat(0.65, 1.35)

      return {
        id: index,
        angle,
        y,
        scale,
        speed,
        orbitOffset,
      }
    })
  }, [count])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y += delta * 0.12
    groupRef.current.children.forEach((child, index) => {
      const node = nodes[index]
      child.rotation.x += delta * node.speed * 0.6
      child.rotation.y += delta * node.speed
      const wave = Math.sin(state.clock.elapsedTime * node.speed + node.angle) * 0.45
      child.position.y = node.y + wave
    })
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <Float
          key={node.id}
          speed={node.speed}
          rotationIntensity={0.7}
          floatIntensity={0.8}
          position={[
            Math.cos(node.angle) * radius * node.orbitOffset,
            node.y,
            Math.sin(node.angle) * radius * node.orbitOffset,
          ]}
        >
          <mesh scale={node.scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.35}
              metalness={0.4}
              roughness={0.25}
              transparent
              opacity={0.75}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function ThreeBackground({
  className = '',
  baseGradient = 'linear-gradient(145deg, #110a2f 0%, #1f1147 42%, #06263a 100%)',
  orbColor = '#a78bfa',
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ background: baseGradient }} />

      <div className="absolute inset-0 opacity-75">
        <Canvas
          dpr={[1, 1.25]}
          camera={{ position: [0, 0, 7], fov: 42 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 3]} intensity={1.1} />
          <pointLight position={[-3, -2, 2]} color="#22d3ee" intensity={1.2} />
          <Suspense fallback={null}>
            <OrbitalGroup color={orbColor} />
          </Suspense>
        </Canvas>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(167,139,250,0.24), transparent 45%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.18), transparent 40%)',
        }}
      />
    </div>
  )
}
