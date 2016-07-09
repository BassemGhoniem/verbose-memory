/**
 * Created by bassem on 7/8/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        required: true,
        type: String
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        required: true,
        type: Currency
    },
    description: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;