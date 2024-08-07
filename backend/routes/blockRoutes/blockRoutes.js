const { addBlock } = require("../../controllers/blockControllers/blockControllers.js");
const { addFlat, allocateFlat } = require("../../controllers/blockControllers/flatControllers.js");

const router = require("express").Router();

router.post('/addBlock', addBlock);
router.post('/addFlat/:blockId', addFlat);
router.post('/allocateFlat', allocateFlat);

module.exports = router;