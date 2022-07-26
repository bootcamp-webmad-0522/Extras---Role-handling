const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const Coaster = require('./../models/Coaster.model')

router.get("/getAllCoasters", (req, res) => {

    Coaster
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneCoaster/:coaster_id", (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveCoaster", isAuthenticated, (req, res) => {

    const { _id: owner } = req.payload

    Coaster
        .create({ owner, ...req.body })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router