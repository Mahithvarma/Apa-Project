const { userLogin, userRegister, adminLogin, adminRegister } = require('../controllers/authControllers.js');

const router = require("express").Router();

router.post('/userlogin', userLogin);
router.post('/userregister', userRegister);
router.post('/adminLogin', adminLogin);
router.post('/adminRegister', adminRegister);

module.exports = router;