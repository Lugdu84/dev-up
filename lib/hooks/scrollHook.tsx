'use client'

import { useEffect, useState } from 'react'

export default function ScrollHook() {
  const [scrollPos, setScrollPos] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 10) {
          setScrollPos(true)
        } else {
          setScrollPos(false)
        }
      })
    }
  }, [])
  return { scrollPos }
}
