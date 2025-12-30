import { Link, useLocation } from 'react-router-dom'
import './Header.css'

/**
 * Header Component
 * Navigation header with links to Tutorial and Game pages
 */
function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🧠</span>
          <span className="logo-text">ML Memory Game</span>
        </Link>
        <nav className="nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Learn
          </Link>
          <Link
            to="/game"
            className={`nav-link ${location.pathname === '/game' ? 'active' : ''}`}
          >
            Play Game
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
