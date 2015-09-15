var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var submitDrinkModel = new Schema({
    drink_id: {type: String},
    drink_name: {type: String},
    ingredients: {type: String},
    drink_color: {type: String},
    glass_name: {type: String},
    glass_image_url: {type: String},
    instructions: {type: String},
    contributor: {type: String},
    ingredients: {type: String},
    no_of_views: {type: String},
    date_added: {type: String}
    //is_active: {type: Boolean, default:false}
});

module.exports= mongoose.model('Drink', submitDrinkModel);

