import './ConceptCard.css'

/**
 * ConceptCard Component
 * Displays a single ML concept with explanation and example
 * Used in the Tutorial page
 */
function ConceptCard({ concept, index }) {
  return (
    <article className="concept-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="concept-header">
        <span className="concept-icon">{concept.icon}</span>
        <h3 className="concept-title">{concept.term}</h3>
      </div>

      <div className="concept-body">
        <p className="concept-explanation">{concept.explanation}</p>

        <div className="concept-example">
          <span className="example-label">Example:</span>
          <p className="example-text">{concept.example}</p>
        </div>
      </div>

      <div className="concept-footer">
        <span className="concept-definition">{concept.definition}</span>
      </div>
    </article>
  )
}

export default ConceptCard
