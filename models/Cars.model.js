const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imageUrl:{
        type: String, 
        required:true
    }
});

const Car = model('Car', carSchema);
module.exports = Car;