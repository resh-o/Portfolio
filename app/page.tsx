import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Academics from '@/components/Academics'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Grain from '@/components/Grain'

export default function Home() {
  return (
    <>
      <Grain />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Academics />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
