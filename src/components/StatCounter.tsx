import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
}

export default function StatCounter({ value, suffix = '' }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on('change', (latest) => setDisplay(Math.round(latest)))
  }, [springValue])

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  )
}
