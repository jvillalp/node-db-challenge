const router = require("express").Router()

const Resources = require("./resources-model")

router.get('/', (req, res) => {
    res.status(200).json({ message: 'it is W O R K I N G!'})
})

module.exports = router;