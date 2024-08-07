const { familyRegister, familyLogin } = require("../../controllers/authControllers/familyControllers.js");

const router = require("express").Router();

router.post('/familyLogin', familyLogin);
router.post('/familyRegister', familyRegister);

module.exports = router;