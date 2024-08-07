const { adminLogin, adminRegister } = require('../../controllers/authControllers/adminControllers.js');

const router = require("express").Router();

router.post('/adminLogin', adminLogin);
router.post('/adminRegister', adminRegister);

module.exports = router;