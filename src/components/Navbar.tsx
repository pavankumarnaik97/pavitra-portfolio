import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 w-full max-w-6xl container-px transition-all duration-500`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? 'border border-white/10 bg-base-soft/70 shadow-lg shadow-black/20 backdrop-blur-xl'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('hero')
            }}
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            Pavitra<span className="text-accent-violet">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="group relative px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-accent-purple to-accent-amber transition-transform duration-300 group-hover:scale-x-100 ${
                      activeId === link.id ? 'scale-x-100' : ''
                    }`}
                  />
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute left-1/2 top-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-violet"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent-violet/50 hover:bg-white/[0.06]"
            >
              Let's talk
            </button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="container-px mt-2 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-base-soft/95 p-3 shadow-xl shadow-black/30 backdrop-blur-xl">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? 'bg-white/[0.06] text-ink'
                      : 'text-ink-muted hover:bg-white/[0.04] hover:text-ink'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
