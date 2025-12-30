import { Link } from 'react-router-dom'
import ConceptCard from '../components/ConceptCard'
import { mlConcepts } from '../data/mlConcepts'
import './Tutorial.css'

/**
 * Tutorial Page
 * Displays all ML concepts with explanations and examples
 * Provides navigation to start the memory game
 */
function Tutorial() {
  return (
    <div className="tutorial-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Learn Machine Learning
            <span className="hero-subtitle">Through Play</span>
          </h1>
          <p className="hero-description">
            Master the fundamental concepts of Machine Learning through an interactive
            memory game. First, explore the concepts below, then test your knowledge
            by matching terms with their definitions!
          </p>
          <Link to="/game" className="cta-button">
            <span>Start Playing</span>
            <span className="cta-icon">🎮</span>
          </Link>
        </div>
        <div className="hero-illustration">
          <div className="floating-icons">
            <span className="float-icon" style={{ animationDelay: '0s' }}>🧠</span>
            <span className="float-icon" style={{ animationDelay: '0.5s' }}>🤖</span>
            <span className="float-icon" style={{ animationDelay: '1s' }}>📊</span>
            <span className="float-icon" style={{ animationDelay: '1.5s' }}>⚡</span>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="how-to-play">
        <h2>How to Play</h2>
        <div className="instructions">
          <div className="instruction-step">
            <span className="step-number">1</span>
            <p>Read through the ML concepts below to familiarize yourself with the terms</p>
          </div>
          <div className="instruction-step">
            <span className="step-number">2</span>
            <p>Click &quot;Start Playing&quot; to begin the memory game</p>
          </div>
          <div className="instruction-step">
            <span className="step-number">3</span>
            <p>Flip cards to find matching pairs of terms and definitions</p>
          </div>
          <div className="instruction-step">
            <span className="step-number">4</span>
            <p>Match all 8 pairs with the fewest moves to get a high score!</p>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="concepts-section">
        <h2 className="section-title">
          <span className="section-icon">📚</span>
          Key ML Concepts
        </h2>
        <p className="section-description">
          Study these {mlConcepts.length} fundamental Machine Learning concepts.
          Understanding them will help you master the memory game!
        </p>
        <div className="concepts-grid">
          {mlConcepts.map((concept, index) => (
            <ConceptCard key={concept.id} concept={concept} index={index} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Test Your Knowledge?</h2>
        <p>Put your ML knowledge to the test in our memory matching game!</p>
        <Link to="/game" className="cta-button large">
          <span>Play the Memory Game</span>
          <span className="cta-icon">🎯</span>
        </Link>
      </section>
    </div>
  )
}

export default Tutorial
