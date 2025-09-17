"use client"

import { useEffect, useRef } from 'react'

const FilmGrain = () => {
  const grainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grain = grainRef.current
    if (!grain) return

    let frame: number

    const animate = () => {
      // Randomize background position to simulate grain flicker
      const x = Math.random() * 100
      const y = Math.random() * 100
      grain.style.backgroundPosition = `${x}% ${y}%`
      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      ref={grainRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-[0.6] dark:opacity-[0.9]"
      style={{
        backgroundImage: 'url("/noise.png")',
        mixBlendMode: 'overlay',
        backgroundSize: '1200px 1200px',
      }}
    />
  )
}

export default FilmGrain
