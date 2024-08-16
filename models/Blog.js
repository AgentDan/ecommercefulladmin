const mongoose = require('mongoose')
const {Types} = require("mongoose");

const blogSchema = new mongoose.Schema({
//     card: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     group: {
//         type: String,
//         required: true,
//     }
// })
    name: {type: String, default: 'NO NAME'},
    project: {type: String, default: "NO PROJECT"},
    price: {type: String, default: "000"},
    nameEN: {type: String, default: "NO NAME_EN"},
    nameRS: {type: String, default: "NO NAME_RS"},
    nameRU: {type: String, default: "NO NAME_RU"},
    imagesCounter: {type: Number, default: 1},
    images: [{type: String}],
    check: {type: Boolean, default: true},
    components: [{
        id: {type: Types.ObjectId},
        name: {type: String},
        check: {type: Boolean},
        elems: []
    }]
})

module.exports = mongoose.model('Blog', blogSchema)