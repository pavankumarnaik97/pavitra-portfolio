import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export default function CustomCursor() {
  const isDesktop = useIsDesktop()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isPointer, setIsPointer] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return

    const move = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      if (!visible) setVisible(true)

      const target = event.target as HTMLElement
      setIsPointer(Boolean(target.closest('a, button, [role="button"], input, textarea')))
    }

    const hide = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
    }
  }, [isDesktop, prefersReducedMotion, visible, x, y])

  if (!isDesktop || prefersReducedMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: isPointer ? 44 : 20,
          height: isPointer ? 44 : 20,
          x: isPointer ? -22 : -10,
          y: isPointer ? -22 : -10,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="rounded-full border border-white bg-white/20"
      />
    </motion.div>
  )
}
