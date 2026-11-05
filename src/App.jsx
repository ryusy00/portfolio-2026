
import { useCallback, useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Header from './components/Header'

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

      <Header />

      <main className="portfolio">
        <h1 className="title">My Portfolio</h1>
        <p className="subtitle">
          Web Publisher & Frontend Developer
        </p>
      </main>
    </>
  )
}

export default App
