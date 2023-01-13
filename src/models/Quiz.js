const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    title: String,
    topic: String,
    questionCount: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    objectId: {
        type: mongoose.Types.ObjectId
    }
});

quizSchema.pre('save', function () {
    this.objectId = this._id;
});


const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;