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
      if (existingCursor) {
        existingCursor.remove()
      }
    
      const cursor = document.createElement('div')
      cursor.id = 'custom-cursor'
    
      const root = document.documentElement
      const accentColor = getComputedStyle(root).getPropertyValue('--accent').trim()
      const primaryColor = getComputedStyle(root).getPropertyValue('--primary').trim()
    
      const defaultAccent = '#f43f5e' // Rose-500
      const defaultPrimary = '#0f172a' // Slate-900
    
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
    
        if (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a')
        ) {
          cursor.style.backgroundColor = primaryColor ? `hsl(${primaryColor})` : defaultPrimary
          cursor.style.borderRadius = '50%'
          cursor.style.width = '16px'
          cursor.style.height = '16px'
          document.body.style.cursor = 'none'
          target.style.cursor = 'none'
        }
        else if (
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
          document.body.style.cursor = 'none'
        }
        else if (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('input, textarea')
        ) {
          cursor.style.opacity = '0'
          document.body.style.cursor = ''
        }
        else {
          cursor.style.backgroundColor = accentColor ? `hsl(${accentColor})` : defaultAccent
          cursor.style.borderRadius = '50%'
          cursor.style.width = '16px'
          cursor.style.height = '16px'
          cursor.style.opacity = '1'
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
        document.body.style.cursor = ''
        target.style.cursor = ''
      }
    
      document.addEventListener('mousemove', updateCursor)
      document.addEventListener('mouseover', handleMouseEnter)
      document.addEventListener('mouseout', handleMouseLeave)
    
      const cleanup = () => {
        document.removeEventListener('mousemove', updateCursor)
        document.removeEventListener('mouseover', handleMouseEnter)
        document.removeEventListener('mouseout', handleMouseLeave)
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
