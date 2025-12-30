/**
 * Machine Learning Concepts Data
 * Contains 10 key ML concepts with explanations, examples, and icons
 * Used for both the tutorial section and memory game cards
 */

export const mlConcepts = [
  {
    id: 1,
    term: "Supervised Learning",
    definition: "Learning from labeled data where the algorithm learns to map inputs to known outputs",
    explanation: "Supervised learning is like learning with a teacher. The algorithm is trained on a dataset where the correct answers are provided. It learns patterns from this labeled data to make predictions on new, unseen data.",
    example: "Spam email detection - the model learns from emails labeled as 'spam' or 'not spam' to classify new emails.",
    icon: "👨‍🏫"
  },
  {
    id: 2,
    term: "Unsupervised Learning",
    definition: "Learning patterns from unlabeled data without predefined outputs",
    explanation: "Unsupervised learning discovers hidden patterns in data without labeled responses. The algorithm explores the data structure on its own, finding natural groupings or relationships.",
    example: "Customer segmentation - grouping customers based on purchasing behavior without predefined categories.",
    icon: "🔍"
  },
  {
    id: 3,
    term: "Neural Networks",
    definition: "Computing systems inspired by biological neural networks in the brain",
    explanation: "Neural networks consist of layers of interconnected nodes (neurons) that process information. They learn by adjusting connection weights through training, enabling them to recognize complex patterns.",
    example: "Image recognition - identifying objects in photos by learning from millions of labeled images.",
    icon: "🧠"
  },
  {
    id: 4,
    term: "Gradient Descent",
    definition: "Optimization algorithm that minimizes error by iteratively moving toward the steepest descent",
    explanation: "Gradient descent is like finding the lowest point in a valley while blindfolded. You feel which direction goes downhill and take steps that way. The algorithm adjusts model parameters to minimize prediction errors.",
    example: "Training a model to predict house prices by gradually adjusting weights until predictions match actual prices.",
    icon: "📉"
  },
  {
    id: 5,
    term: "Overfitting",
    definition: "When a model learns training data too well, including noise, failing to generalize",
    explanation: "Overfitting occurs when a model memorizes training data instead of learning general patterns. It performs excellently on training data but poorly on new data - like memorizing answers without understanding concepts.",
    example: "A model that perfectly predicts all training house prices but fails on new houses because it learned specific quirks.",
    icon: "📈"
  },
  {
    id: 6,
    term: "Bias-Variance Tradeoff",
    definition: "Balance between model simplicity (bias) and sensitivity to training data (variance)",
    explanation: "High bias means oversimplified models that miss patterns (underfitting). High variance means overly complex models that capture noise (overfitting). Good models find the sweet spot between these extremes.",
    example: "A linear model for curved data has high bias; a very complex model that fits every point has high variance.",
    icon: "⚖️"
  },
  {
    id: 7,
    term: "Reinforcement Learning",
    definition: "Learning through trial and error by receiving rewards or penalties for actions",
    explanation: "Like training a pet with treats, reinforcement learning agents learn by interacting with an environment. They receive rewards for good actions and penalties for bad ones, gradually learning optimal behavior.",
    example: "Teaching an AI to play chess by rewarding wins and penalizing losses until it develops winning strategies.",
    icon: "🎮"
  },
  {
    id: 8,
    term: "Feature Engineering",
    definition: "Creating new input variables from raw data to improve model performance",
    explanation: "Feature engineering transforms raw data into meaningful inputs that help models learn better. It's about representing data in ways that capture important patterns and relationships.",
    example: "Creating a 'day of week' feature from a date to help predict retail sales patterns.",
    icon: "🔧"
  },
  {
    id: 9,
    term: "Cross-Validation",
    definition: "Technique to assess model performance by testing on multiple data subsets",
    explanation: "Cross-validation splits data into multiple parts, training on some and testing on others repeatedly. This provides a more reliable estimate of how well a model will perform on unseen data.",
    example: "K-fold validation splits data into 5 parts, training on 4 and testing on 1, rotating through all combinations.",
    icon: "🔄"
  },
  {
    id: 10,
    term: "Deep Learning",
    definition: "Neural networks with many layers that learn hierarchical representations",
    explanation: "Deep learning uses neural networks with many hidden layers to automatically learn complex features from data. Each layer learns increasingly abstract representations, enabling breakthrough performance on complex tasks.",
    example: "Self-driving cars using deep learning to interpret camera images and make driving decisions.",
    icon: "🏗️"
  }
];

/**
 * Generate card pairs for memory game
 * Creates pairs of term-definition cards for matching
 */
export const generateGameCards = () => {
  // Select 8 concepts for 16 cards (8 pairs)
  const selectedConcepts = mlConcepts.slice(0, 8);

  const cards = [];

  selectedConcepts.forEach((concept) => {
    // Term card
    cards.push({
      id: `term-${concept.id}`,
      pairId: concept.id,
      type: 'term',
      content: concept.term,
      icon: concept.icon
    });

    // Definition card
    cards.push({
      id: `def-${concept.id}`,
      pairId: concept.id,
      type: 'definition',
      content: concept.definition,
      icon: concept.icon
    });
  });

  return cards;
};

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export const shuffleCards = (cards) => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
