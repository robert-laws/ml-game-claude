import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tutorial from './pages/Tutorial'
import Game from './pages/Game'
import './App.css'

/**
 * Main App Component
 * Sets up routing between Tutorial and Game pages
 */
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Tutorial />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
