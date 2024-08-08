const { addBlock, getAllBlocks } = require("../../controllers/blockControllers/blockControllers.js");
const { addFlat, allocateFlat } = require("../../controllers/blockControllers/flatControllers.js");

const router = require("express").Router();

router.post('/addBlock', addBlock);
router.post('/addFlat/:blockId', addFlat);
router.post('/allocateFlat', allocateFlat);
router.get('/getAllBlocks', getAllBlocks);

module.exports = router;