const Question = require('../models/Question');

module.exports = (questionData) => Question.create(questionData);

// module.exports = () => Question.