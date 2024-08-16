const mongoose = require('mongoose')
const {Types} = require("mongoose")

const EcommerceFullCatalogSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    project: {type: String, unique: true},
    price: {type: String, default: "000"},
    nameEN: {type: String, default: "NO NAME_EN"},
    nameRS: {type: String, default: "NO NAME_RS"},
    nameRU: {type: String, default: "NO NAME_RU"},
    imagesCounter: {type: Number, default: 1},
    images: [{type: String, default: "noImage.png"}],
    check: {type: Boolean, default: true},
    components: [{
        id: {type: Types.ObjectId},
        name: {type: String},
        check: {type: Boolean},
        elems: []
    }]
})

module.exports = mongoose.model('EcommerceFullCatalog', EcommerceFullCatalogSchema)