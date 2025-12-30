import './Card.css'

/**
 * Card Component
 * Individual memory game card with flip animation
 * Shows either term or definition based on card type
 */
function Card({ card, isFlipped, isMatched, onClick, disabled }) {
  const handleClick = () => {
    if (!disabled && !isFlipped && !isMatched) {
      onClick(card)
    }
  }

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={isFlipped ? card.content : 'Hidden card'}
    >
      <div className="card-inner">
        {/* Card Back - shown when not flipped */}
        <div className="card-face card-back">
          <span className="card-back-icon">🤖</span>
          <span className="card-back-text">ML</span>
        </div>

        {/* Card Front - shown when flipped */}
        <div className={`card-face card-front ${card.type}`}>
          <span className="card-icon">{card.icon}</span>
          <p className="card-content">{card.content}</p>
          <span className={`card-type-badge ${card.type}`}>
            {card.type === 'term' ? 'Term' : 'Definition'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
