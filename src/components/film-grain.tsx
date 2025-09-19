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
      className="fixed inset-0 pointer-events-none z-[1] opacity-[1] dark:opacity-[0.9]"
      style={{
        backgroundImage: 'url("/noise.webp")',
        mixBlendMode: 'overlay',
        backgroundSize: '880px 880px',
        backgroundRepeat: 'repeat',
      }}
    />
  )
}

export default FilmGrain
