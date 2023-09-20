'use client'

import { useEffect, useState } from 'react'

export default function ScrollHook() {
  const [scrollPos, setScrollPos] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollPos(true)
      } else {
        setScrollPos(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return { scrollPos }
}
