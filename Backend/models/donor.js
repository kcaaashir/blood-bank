const mongoose = require('mongoose')

const donorSchema =  new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
         age: {
            type: Number,
            required: true,
        },
        sex: {
            type: String,
            required: true,
        },
         blood_group: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        phone:{
            type: Number,
            required: true
        }, 
    },
    {
		collection: 'donor',
		timestamps: true,
		toObject: {
			virtuals: true,
		},
		toJson: {
			virtuals: true,
		},
	}
)

module.exports = mongoose.model("donor", donorSchema)
