import { Link } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import './Game.css'

/**
 * Game Page
 * Contains the memory game board and instructions
 */
function Game() {
  return (
    <div className="game-page">
      <div className="game-header">
        <h1 className="game-title">ML Memory Game</h1>
        <p className="game-instructions">
          Match ML terms with their definitions! Click cards to flip them and find pairs.
        </p>
        <Link to="/" className="back-link">
          ← Back to Tutorial
        </Link>
      </div>
      <GameBoard />
    </div>
  )
}

export default Game
