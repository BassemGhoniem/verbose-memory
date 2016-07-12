/**
 * Created by bassem on 7/8/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        required: true,
        type: String
    },
    designation: {
        required: true,
        type: String
    },
    abbr: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
},
    {
        timestamps: true
    });

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;