const Question = require('../models/Question');

// CRUD
exports.createQst = (questionData) => Question.create(questionData);

exports.updateQst = (quiestionId, data) => Question.findByIdAndUpdate(quiestionId, data);

exports.deleteQst = (quiestionId, data) => Question.findByIdAndUpdate(quiestionId, data);

exports.getQuestionsByQuizId = (quizId) => Question.find({_id: quizId}).lean();

