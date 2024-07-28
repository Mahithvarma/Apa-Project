const { userLogin, userRegister, adminLogin, adminRegister } = require('../controllers/authControllers.js');

const router = require("express").Router();

router.get('/userlogin', userLogin);
router.post('/userregister', userRegister);
router.get('/adminLogin', adminLogin);
router.post('/adminRegister', adminRegister);

module.exports = router;