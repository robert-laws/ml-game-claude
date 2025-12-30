# ML Memory Game

An interactive educational React application that teaches Machine Learning concepts through a fun memory matching game.

## Features

### Tutorial Section
- Learn 10 key ML concepts with detailed explanations
- Each concept includes:
  - Clear definition
  - 2-4 sentence explanation
  - Real-world example
  - Visual icon representation
- Animated concept cards with hover effects
- "How to Play" instructions

### Memory Game
- 16-card game board (8 matching pairs)
- Match ML terms with their definitions
- Real-time game statistics:
  - Move counter
  - Timer
  - Match progress
- 3D card flip animations
- Score calculation based on moves and time
- High scores persisted in localStorage (top 5)
- Win celebration modal
- Restart functionality

### Technical Features
- Built with React + Vite
- React Router for navigation
- Responsive design (mobile-friendly)
- CSS animations and transitions
- No external CSS frameworks

## ML Concepts Covered

1. **Supervised Learning** - Learning from labeled data
2. **Unsupervised Learning** - Finding patterns in unlabeled data
3. **Neural Networks** - Brain-inspired computing systems
4. **Gradient Descent** - Optimization algorithm
5. **Overfitting** - Model memorization vs generalization
6. **Bias-Variance Tradeoff** - Model complexity balance
7. **Reinforcement Learning** - Learning through rewards
8. **Feature Engineering** - Creating meaningful inputs
9. **Cross-Validation** - Model performance assessment
10. **Deep Learning** - Multi-layer neural networks

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd ml-game-claude

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Card.jsx          # Memory game card component
│   ├── Card.css
│   ├── ConceptCard.jsx   # Tutorial concept card
│   ├── ConceptCard.css
│   ├── GameBoard.jsx     # Main game logic
│   ├── GameBoard.css
│   ├── Header.jsx        # Navigation header
│   ├── Header.css
│   ├── ScoreBoard.jsx    # High scores display
│   └── ScoreBoard.css
├── data/
│   └── mlConcepts.js     # ML concepts data
├── pages/
│   ├── Game.jsx          # Game page
│   ├── Game.css
│   ├── Tutorial.jsx      # Tutorial/home page
│   └── Tutorial.css
├── App.jsx               # Main app with routing
├── App.css
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## How to Play

1. Read through the ML concepts on the Tutorial page
2. Click "Start Playing" to begin the game
3. Click on cards to flip them
4. Find matching pairs (term + definition)
5. Match all 8 pairs with minimum moves for a high score

## Scoring System

- Base score: 1000 points
- Move penalty: -10 points per move
- Time penalty: -5 points per 5 seconds
- High scores are saved locally

## Technologies Used

- React 19
- React Router DOM 7
- Vite 7
- CSS3 (Flexbox, Grid, Animations)
- localStorage API

## Possible Improvements

- Add difficulty levels (easy, medium, hard)
- Include more ML concepts
- Add sound effects
- Implement multiplayer mode
- Add timed challenge mode
- Include hints feature
- Add concept quiz mode
- Progressive Web App (PWA) support

## License

MIT
