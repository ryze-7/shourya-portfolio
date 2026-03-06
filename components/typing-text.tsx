'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface TypingTextProps {
  strings?: string[]
  className?: string
  typeSpeed?: number
  backSpeed?: number
}

export function TypingText({
  strings = [
    // "Hello, I'm Shourya Kashyap",
    'Cybersecurity Researcher',
    'OSINT Investigator',
    'Network Pentester',
    'Blue Team Defender',
  ],
  className = 'text-accent font-mono text-sm mb-4',
  typeSpeed = 50,
  backSpeed = 30,
}: TypingTextProps) {
  const el = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay: 2000,
      loop: true,
      cursorChar: '_',
    })

    return () => typed.destroy()
  }, [])

  return (
    <p className={className}>
      <span ref={el} />
    </p>
  )
}