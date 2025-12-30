import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import { generateGameCards, shuffleCards } from '../data/mlConcepts'
import './GameBoard.css'

/**
 * Load high scores from localStorage
 * Used as lazy initializer to avoid effect setState warnings
 */
function loadHighScores() {
  const savedScores = localStorage.getItem('mlMemoryHighScores')
  if (savedScores) {
    try {
      return JSON.parse(savedScores)
    } catch (error) {
      console.error('Error loading high scores:', error)
      return []
    }
  }
  return []
}

/**
 * Generate initial shuffled cards
 * Used as lazy initializer
 */
function getInitialCards() {
  const gameCards = generateGameCards()
  return shuffleCards(gameCards)
}

/**
 * GameBoard Component
 * Main game logic controller - handles card flipping, matching, and scoring
 */
function GameBoard() {
  // Game state with lazy initializers
  const [cards, setCards] = useState(getInitialCards)
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const [highScores, setHighScores] = useState(loadHighScores)

  // Track if score was already saved for current game
  const scoreSavedRef = useRef(false)

  // Compute gameWon from matchedPairs instead of separate state
  const gameWon = useMemo(() => {
    return matchedPairs.length === 8 && gameStarted
  }, [matchedPairs.length, gameStarted])

  // Use refs to track current values for score calculation
  const movesRef = useRef(moves)
  const timerRef = useRef(timer)
  const highScoresRef = useRef(highScores)

  // Keep refs in sync with state
  useEffect(() => {
    movesRef.current = moves
  }, [moves])

  useEffect(() => {
    timerRef.current = timer
  }, [timer])

  useEffect(() => {
    highScoresRef.current = highScores
  }, [highScores])

  // Calculate score based on moves and time
  const calculateScore = useCallback((movesCount, time) => {
    // Base score of 1000, minus penalties
    const movePenalty = movesCount * 10
    const timePenalty = Math.floor(time / 5) * 5
    return Math.max(0, 1000 - movePenalty - timePenalty)
  }, [])

  // Save high score to localStorage
  const saveHighScore = useCallback(() => {
    if (scoreSavedRef.current) return // Prevent duplicate saves
    scoreSavedRef.current = true

    const currentMoves = movesRef.current
    const currentTimer = timerRef.current
    const currentHighScores = highScoresRef.current

    const newScore = {
      moves: currentMoves,
      time: currentTimer,
      date: new Date().toLocaleDateString(),
      score: calculateScore(currentMoves, currentTimer)
    }

    const updatedScores = [...currentHighScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5) // Keep top 5 scores

    setHighScores(updatedScores)
    localStorage.setItem('mlMemoryHighScores', JSON.stringify(updatedScores))
  }, [calculateScore])

  // Initialize/reset game
  const initializeGame = useCallback(() => {
    const gameCards = generateGameCards()
    const shuffledCards = shuffleCards(gameCards)
    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedPairs([])
    setMoves(0)
    setTimer(0)
    setGameStarted(false)
    setIsChecking(false)
    scoreSavedRef.current = false // Reset score saved flag
  }, [])

  // Timer effect
  useEffect(() => {
    let interval = null
    if (gameStarted && !gameWon) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [gameStarted, gameWon])

  // Save high score when game is won
  useEffect(() => {
    if (gameWon) {
      saveHighScore()
    }
  }, [gameWon, saveHighScore])

  // Handle card click
  const handleCardClick = (card) => {
    // Start game on first click
    if (!gameStarted) {
      setGameStarted(true)
    }

    // Prevent clicking if already checking or card is already flipped/matched
    if (isChecking || flippedCards.length >= 2) return
    if (flippedCards.find((c) => c.id === card.id)) return
    if (matchedPairs.includes(card.pairId)) return

    const newFlippedCards = [...flippedCards, card]
    setFlippedCards(newFlippedCards)

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1)
      setIsChecking(true)

      const [firstCard, secondCard] = newFlippedCards

      if (firstCard.pairId === secondCard.pairId && firstCard.type !== secondCard.type) {
        // Match found!
        setTimeout(() => {
          setMatchedPairs((prev) => [...prev, firstCard.pairId])
          setFlippedCards([])
          setIsChecking(false)
        }, 500)
      } else {
        // No match - flip cards back
        setTimeout(() => {
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  // Format timer display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Check if a card should be shown as flipped
  const isCardFlipped = (card) => {
    return flippedCards.some((c) => c.id === card.id) || matchedPairs.includes(card.pairId)
  }

  // Check if a card is matched
  const isCardMatched = (card) => {
    return matchedPairs.includes(card.pairId)
  }

  return (
    <div className="game-container">
      {/* Game Stats */}
      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Moves</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Time</span>
          <span className="stat-value">{formatTime(timer)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Matches</span>
          <span className="stat-value">{matchedPairs.length}/8</span>
        </div>
        <button className="restart-btn" onClick={initializeGame}>
          🔄 Restart
        </button>
      </div>

      {/* Win Modal */}
      {gameWon && (
        <div className="win-modal-overlay">
          <div className="win-modal">
            <h2>🎉 Congratulations!</h2>
            <p>You matched all the ML concepts!</p>
            <div className="win-stats">
              <p><strong>Moves:</strong> {moves}</p>
              <p><strong>Time:</strong> {formatTime(timer)}</p>
              <p><strong>Score:</strong> {calculateScore(moves, timer)}</p>
            </div>
            <button className="play-again-btn" onClick={initializeGame}>
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Game Board */}
      <div className="game-board">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={isCardFlipped(card)}
            isMatched={isCardMatched(card)}
            onClick={handleCardClick}
            disabled={isChecking}
          />
        ))}
      </div>

      {/* High Scores */}
      <ScoreBoard highScores={highScores} />
    </div>
  )
}

export default GameBoard
