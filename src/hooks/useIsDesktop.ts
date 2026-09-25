import { useEffect, useState } from 'react'

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)')
    setIsDesktop(query.matches)

    const handler = (event: MediaQueryListEvent) => setIsDesktop(event.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return isDesktop
}
