const {Schema, model} = require('mongoose');

const reqSchema = new Schema(
    {
        destination:{
            type: String, 
            required: [true, 'Destination is required.']
        },
        passangers:{
            type: Number,
            required: [true, 'Passangers is required.']
        },
        dateTimeRange: {
            type: [{
                start: { type: Date, required: true },
                end: { type: Date, required: true }
            }],
            required: [true, 'DateTime range is required.'],
        },
        email:{
            type: String, 
            required: [true, 'Email is required.']
        },
        kids:{
            type: Number,
            default:0
        },
        disabilitys:{
            type: Number,
            default:0
        },
        notes:{
            type: String,
            default:""
        },
        
    }
);
const ReqForm = model('ReqForm', reqSchema);
module.exports = ReqForm;