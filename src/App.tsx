import About from './components/About'
import BackgroundDecor from './components/BackgroundDecor'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Services from './components/Services'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import { useIsDesktop } from './hooks/useIsDesktop'
import { usePrefersReducedMotion } from './hooks/useReducedMotion'

function App() {
  const isDesktop = useIsDesktop()
  const prefersReducedMotion = usePrefersReducedMotion()
  const useCustomCursor = isDesktop && !prefersReducedMotion

  return (
    <div className={useCustomCursor ? 'cursor-none' : ''}>
      <BackgroundDecor />
      <ScrollProgress />
      <Navbar />
      {useCustomCursor && <CustomCursor />}

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <Testimonials />
        <Services />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
