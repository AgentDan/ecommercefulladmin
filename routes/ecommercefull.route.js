const {Router} = require("express")
const router = Router()
const multer = require("multer")
const fs = require("fs")
const MainEcomFull = require("../models/EcommerceFullCatalog")
const axios = require("axios")
const Blog = require("../models/Blog");

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/fotos/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})
const upload = multer({storage: storageConfig})

router.get("/", async (request, response) => {
    let main = await MainEcomFull.find()
    response.json(main)
})

router.get("/cards/:project", async (request, response) => {
    try {
        let project = request.params.project
        let main = await MainEcomFull.find({project: project})
        response.json(main)
    }catch (error){
        console.log(error)
    }
})

router.get('/post', async (req, res) => {
    try {
        const {userId} = req.query
        const main = await MainEcomFull.find({owner: userId})
        res.json(main)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delproject/:project', async (req, res) => {
        try {
            await MainEcomFull.deleteMany({project: req.params.project})
            const main = await MainEcomFull.find()
            res.json(main)
        } catch (error) {
            console.log(error)
        }
    }
)

router.delete("/delImg", async (request, response) => {
    try {
        const {nameImg, localCardId} = request.query
        await MainEcomFull.updateMany({_id: localCardId}, {"$pull": {"images": nameImg}})
        const main = await MainEcomFull.find()
        response.json(main)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delcard/:id', async (req, res) => {
        try {
            let projectIdDeleteCard = await MainEcomFull.findOne({_id: req.params.id})
            let currentProject = projectIdDeleteCard.project
            await MainEcomFull.findOneAndDelete({_id: req.params.id})
            let main = await MainEcomFull.find({project: currentProject})
            res.json(main)
        } catch (error) {
            console.log(error)
        }
    }
)

router.post("/addmainfull", upload.single("myfile"), async (req, res) => {
    console.log("HELLO212121")
    try {
       const name = req.body.name
       const isUsed = await MainEcomFull.findOne({name})
       if (isUsed) {
           return res.status(301).json({message: "MY Error!!!!!!!!!!"})
       }

       const newMain = new MainEcomFull({
           id: req.body._id,
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
       newMain
           .save()
           .then(main => res.json("The Article ADD!!!"))
           .catch(err => res.status(400).json(`Error my: ${err}`))
   }catch (error){
   }

})

module.exports = router