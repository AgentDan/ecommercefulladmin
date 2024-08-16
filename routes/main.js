const {Router} = require("express")
const router = Router()
const Blog = require('./../models/Blog')
const multer = require("multer")
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.get('/', async (request, response) => {
    let blog = await Blog.find()
    response.json(blog)
})

router.post("/addblog", async (req, res) => {
    try {
        const name = req.body.name
        const isUsed = await Blog.findOne({name})
        if (isUsed) {
            return res.status(301).json({message: "MY Error!!!!!!!!!!"})
        }

        const newCard = new Blog({
            name: req.body.name,
            project: req.body.project,
            price: req.body.price,
            nameEN: req.body.nameEN,
            nameRS: req.body.nameRS,
            nameRU: req.body.nameRU,
            imagesCounter: req.body.imagesCounter,
            images: req.body.images,
            check: req.body.check,
            components: req.body.components,
        })

        await newCard.save()
        res.status(201).json({message: "Data success!!!"})

    }catch (error){
        console.log(error)
    }
})

router.delete('/deleteblog/:id', async (request, response) => {
    try {
        const blog = await Blog.findOneAndDelete({_id: request.params.id})
        response.json(blog)
        fs.unlinkSync(`./client/public/uploads/${blog.img}`)

    } catch (error) {
        console.log(error)

    }
})

module.exports = router