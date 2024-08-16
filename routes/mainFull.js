const {Router} = require("express")
const router = Router()
const multer = require("multer")
const fs = require("fs")
const MainFull = require("../models/EcommerceFullCatalog")
const axios = require("axios")

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})
const upload = multer({storage: storageConfig})

router.get("/", async (request, response) => {
    let main = await MainFull.find()
    response.json(main)
})

router.get('/post', async (req, res) => {
    try {
        const {userId} = req.query
        const main = await MainFull.find({owner: userId})
        res.json(main)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delproject/:project', async (req, res) => {
        try {
            await MainFull.deleteMany({project: req.params.project})
            const main = await MainFull.find()
            res.json(main)
        } catch (error) {
            console.log(error)
        }
    }
)

router.delete("/delImg", async (request, response) => {
    try {
        const {nameImg, localCardId} = request.query
        await MainFull.updateMany({_id: localCardId}, {"$pull": {"images": nameImg}})
        const main = await MainFull.find()
        response.json(main)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delcard/:id', async (req, res) => {
        try {
            await MainFull.findOneAndDelete({_id: req.params.id})
            const main = await MainFull.find()
            res.json(main)
        } catch (error) {
            console.log(error)
        }
    }
)

// router.delete('/delimg/:id', async (req, res) => {
//         try {
//             let mainOld = await MainFull.findOneAndDelete({_id: req.params.id})
//             let main = await MainFull.find()
//             res.json(mainOld)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// )

router.post("/addmainfull", upload.single("myfile"), (req, res) => {
    const newMain = new MainFull({
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
})

module.exports = router