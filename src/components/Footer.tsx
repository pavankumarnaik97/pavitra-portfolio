import { Mail, Phone } from 'lucide-react'
import { LinkedinIcon } from './icons/BrandIcons'

const SOCIALS = [
  { icon: Mail, href: 'mailto:pavitrap364@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+919482688622', label: 'Phone' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/pavan-naik-77b64a20b/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="section-shell flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-ink">
          Pavitra<span className="text-accent-violet">.</span>
        </a>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-accent-violet/40 hover:text-ink"
            >
              <Icon size={15} strokeWidth={1.8} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-center text-xs text-ink-faint sm:items-end sm:text-right">
          <span>© {new Date().getFullYear()} Pavitra Ganapati Naik. All rights reserved.</span>
          <span>Analytical Executive · Bengaluru, Karnataka</span>
        </div>
      </div>
    </footer>
  )
}
