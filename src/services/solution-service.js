const Solution = require('../models/Solution');

exports.create = (data) => Solution.create(data);

exports.getSolutionsByUserId = (userId) => Solution.find({ owner: userId }).lean();

exports.getSolutionsByQuizId = (quizId) => Solution.find({ quiz: quizId}).lean();

