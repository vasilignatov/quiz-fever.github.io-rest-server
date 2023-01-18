const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    objectId: {
        typeof: mongoose.Schema.Types.ObjectId
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    total: Number,
    correct: Number
});

solutionSchema.pre('save', function() {
    this.objectId = this._id;
});

const Solution = mongoose.model('Solution', solutionSchema);
module.exports = Solution;