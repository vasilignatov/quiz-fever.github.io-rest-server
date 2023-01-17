const Question = require('../models/Question');

exports.create = (questionData) => Question.create(questionData);

// module.exports = () => Question.