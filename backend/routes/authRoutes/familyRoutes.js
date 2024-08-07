const { familyRegister, familyLogin } = require("../../controllers/authControllers/familyControllers.js");

const router = require("express").Router();

router.post('/familylogin', familyLogin);
router.post('/familyregister', familyRegister);

module.exports = router;