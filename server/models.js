const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authordb', { useNewUrlParser: true })
    .catch(err => console.log(err));

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
         required: [true,'Author name must exist' ],
         minlength: [3 , 'author name is at least 3 letters']
        },
    quotes: [{ 
        quote:{type: String,
            minlength:[3,'quote at least 3 letters'],} ,
        vote: { type: Number,default:0},
        id:{type:String}
    }
    ],
}, { versionKey: false }, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);