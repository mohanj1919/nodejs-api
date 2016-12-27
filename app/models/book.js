//book model

var mongoose     = require('mongoose');  
var Schema       = mongoose.Schema;

var BookSchema   = new Schema({  
    quantity: Number,
    name: String,
    uuid: String
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Book', BookSchema);
