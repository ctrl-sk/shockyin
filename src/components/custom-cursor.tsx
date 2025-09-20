"use client"

import { useEffect } from 'react'

export function CustomCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Detect if device has touch support and skip custom cursor on touchscreens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const initCursor = () => {
      const existingCursor = document.getElementById('custom-cursor')
      if (existingCursor) existingCursor.remove()

      const cursor = document.createElement('div')
      cursor.id = 'custom-cursor'

      const root = document.documentElement
      const accentColor = getComputedStyle(root).getPropertyValue('--accent').trim()
      const defaultAccent = '#f43f5e' // Rose-500

      cursor.style.position = 'fixed'
      cursor.style.width = '16px'
      cursor.style.height = '16px'
      cursor.style.backgroundColor = accentColor ? `hsl(${accentColor})` : defaultAccent
      cursor.style.borderRadius = '50%'
      cursor.style.pointerEvents = 'none'
      cursor.style.zIndex = '9999'
      cursor.style.opacity = '1'
      cursor.style.left = '0px'
      cursor.style.top = '0px'
      cursor.style.display = 'block'
      cursor.style.userSelect = 'none'
      cursor.style.willChange = 'transform'

      document.body.style.cursor = 'none'
      document.body.appendChild(cursor)

      const updateCursor = (e: MouseEvent) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }

      const handleMouseEnter = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        let link: HTMLElement | null = null
        
        if (target.tagName === 'A') {
          link = target
        } else {
          link = target.closest('a')
        }

        if (link) {
          const rect = link.getBoundingClientRect()
          cursor.style.backgroundColor = 'gray'
          cursor.style.border = '0px solid transparent'
          cursor.style.borderRadius = window.getComputedStyle(link).borderRadius || '4px'
          cursor.style.width = `${rect.width}px`
          cursor.style.height = `${rect.height}px`
          cursor.style.opacity = '0.2'
          cursor.style.transition =
            'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, opacity 0.3s ease, border 0.3s ease'
          cursor.style.pointerEvents = 'none'
          cursor.style.transform = `translate3d(${rect.left + window.scrollX + rect.width / 2}px, ${rect.top + window.scrollY + rect.height / 2}px, 0) translate(-50%, -50%)`
          document.body.style.cursor = 'none'
          link.style.cursor = 'none'
        } else if (
          target.tagName === 'P' ||
          target.tagName === 'SPAN' ||
          target.tagName === 'H1' ||
          target.tagName === 'H2' ||
          target.tagName === 'H3' ||
          target.tagName === 'H4' ||
          target.tagName === 'H5' ||
          target.tagName === 'H6' ||
          target.tagName === 'LI' ||
          target.tagName === 'TD' ||
          target.tagName === 'TH' ||
          target.tagName === 'LABEL' ||
          target.closest('p, span, h1, h2, h3, h4, h5, h6, li, td, th, label')
        ) {
          cursor.style.backgroundColor = accentColor ? `hsl(${accentColor})` : defaultAccent
          cursor.style.borderRadius = '2px'
          cursor.style.width = '2px'
          cursor.style.height = '24px'
          cursor.style.transition = 'width 0.3s ease, height 0.3s ease'
          document.body.style.cursor = 'none'
        }
        else if (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('input, textarea')
        ) {
          cursor.style.opacity = '0'
          document.body.style.cursor = ''
          cursor.style.transition = 'none'
        } else {
          cursor.style.backgroundColor = accentColor ? `hsl(${accentColor})` : defaultAccent
          cursor.style.borderRadius = '50%'
          cursor.style.width = '16px'
          cursor.style.height = '16px'
          cursor.style.opacity = '1'
          cursor.style.transition = 'width 0.3s, height 0.3s'
          document.body.style.cursor = 'none'
        }
      }

      const handleMouseLeave = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        cursor.style.backgroundColor = accentColor ? `hsl(${accentColor})` : defaultAccent
        cursor.style.borderRadius = '50%'
        cursor.style.width = '16px'
        cursor.style.height = '16px'
        cursor.style.opacity = '1'
        cursor.style.transition = 'width 0.3s, height 0.3s, background-color 0.3s, opacity 0.3s, border 0.3s'
        document.body.style.cursor = ''
        target.style.cursor = ''
      }

      document.addEventListener('mousemove', updateCursor)
      document.addEventListener('mouseenter', handleMouseEnter, true) // USE capture, fires once per element
      document.addEventListener('mouseleave', handleMouseLeave, true)

      const cleanup = () => {
        document.removeEventListener('mousemove', updateCursor)
        document.removeEventListener('mouseenter', handleMouseEnter, true)
        document.removeEventListener('mouseleave', handleMouseLeave, true)
        const cursorElement = document.getElementById('custom-cursor')
        if (cursorElement && cursorElement.parentNode) {
          cursorElement.parentNode.removeChild(cursorElement)
        }
        document.body.style.cursor = ''
      }

      return cleanup
    }

    const timeoutId = setTimeout(initCursor, 100)

    return () => {
      clearTimeout(timeoutId)
      const cursorElement = document.getElementById('custom-cursor')
      if (cursorElement && cursorElement.parentNode) {
        cursorElement.parentNode.removeChild(cursorElement)
      }
      document.body.style.cursor = ''
    }

  }, [])

  return null
}
