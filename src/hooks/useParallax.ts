import { useEffect, useState, useCallback } from 'react'

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0)
  const [ticking, setTicking] = useState(false)

  const updateScrollY = useCallback(() => {
    setScrollY(window.pageYOffset)
    setTicking(false)
  }, [])

  const requestTick = useCallback(() => {
    if (!ticking) {
      setTicking(true)
      requestAnimationFrame(updateScrollY)
    }
  }, [ticking, updateScrollY])

  useEffect(() => {
    const handleScroll = () => requestTick()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [requestTick])

  return scrollY
}

export const useParallaxElement = (speed: number = 0.5, offset: number = 0) => {
  const scrollY = useParallax()
  return (scrollY + offset) * speed
}

export const useIntersectionParallax = (speed: number = 0.5) => {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null)
  const scrollY = useParallax()

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(elementRef)
    return () => observer.disconnect()
  }, [elementRef])

  const parallaxValue = isVisible ? scrollY * speed : 0

  return { parallaxValue, setRef: setElementRef, isVisible }
}