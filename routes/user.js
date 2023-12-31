const router = require("express").Router()
const { verifyToken } = require("./verifyToken");

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, (req, res) => {

})


module.exports = router;