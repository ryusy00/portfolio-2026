
import { useCallback, useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroFinish = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <>
      {showIntro && (
        <Intro onFinish={handleIntroFinish} />
      )}

      {!showIntro && (
        <>
          <Header />

          <main className="portfolio">
            <Hero />
            <About />
          </main>
        </>
      )}
    </>
  )
}

export default App
