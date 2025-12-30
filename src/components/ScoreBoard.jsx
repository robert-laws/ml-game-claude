import './ScoreBoard.css'

/**
 * ScoreBoard Component
 * Displays high scores from localStorage
 */
function ScoreBoard({ highScores }) {
  if (!highScores || highScores.length === 0) {
    return (
      <div className="scoreboard">
        <h3 className="scoreboard-title">🏆 High Scores</h3>
        <p className="no-scores">No scores yet. Complete a game to set a high score!</p>
      </div>
    )
  }

  return (
    <div className="scoreboard">
      <h3 className="scoreboard-title">🏆 High Scores</h3>
      <table className="scores-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Score</th>
            <th>Moves</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={index} className={index === 0 ? 'top-score' : ''}>
              <td>
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
              </td>
              <td className="score-value">{score.score}</td>
              <td>{score.moves}</td>
              <td>{formatTime(score.time)}</td>
              <td>{score.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Format seconds to MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export default ScoreBoard
