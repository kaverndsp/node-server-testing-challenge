const router = require('express').Router();




router.get('/', (req, res) => {
    res.status(200).json({fakedata: "very fake data"});
})


module.exports = router;