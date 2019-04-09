var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minlengeth: 1,
        trim: true
    },
    complected:{
        type: Boolean,
        default:false
    },
    complectedAt:{
        type: Number,
        default: null
    }
});

module.exports={Todo}