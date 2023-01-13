const Quiz = require('../models/Quiz');

// CRUD 
exports.create = (quizData) => Quiz.create(quizData);

exports.getAll = () => Quiz.find({}).lean();

exports.getQuiz = (objectId) => Quiz.findOne({ objectId });

exports.updateQuiz = (objectId, newData) => Quiz.findOneAndUpdate({ objectId }, newData);

exports.deleteQuiz = (objectId) => Quiz.findOneAndDelete({ objectId });