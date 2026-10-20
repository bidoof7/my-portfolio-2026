import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Featured } from './components/Featured'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
