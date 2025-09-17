"use client"

import { useEffect, useRef } from 'react'

const FilmGrain = () => {
  const grainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grain = grainRef.current
    if (!grain) return

    let frame: number

    const animate = () => {
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
      className="fixed inset-0 pointer-events-none z-1 opacity-[0.03] dark:opacity-[0.05]"
      style={{
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+")',
        mixBlendMode: 'overlay',
        backgroundSize: '200px 200px',
      }}
    />
  )
}

export default FilmGrain