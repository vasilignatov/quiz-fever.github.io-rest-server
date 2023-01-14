const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: String,
    answers: [String],
    correctIndex: Number,
    // quiz: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Quiz'
    // }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;