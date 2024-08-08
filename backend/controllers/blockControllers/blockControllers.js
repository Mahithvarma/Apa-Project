const Block = require("../../models/blockModel.js");

const addBlock = async (req, res, next) => {
    try{
        const { name, totalFloors, flats } = req.body;

        const existingBlock = await Block.findOne({ name: name });
        
        if(existingBlock){
            return res.status(400).json({ message: 'Block already exists' });
        }

        const newBlock = await Block.create({
            name,
            totalFloors,
            flats,
        });

        if(newBlock){
            return res.status(201).json({ message: 'Block added successfully' });
        }
        
        return res.status(400).json({ message: 'Error adding block', error });
    }
    catch(err){
        next(err);
    }
};

const getAllBlocks = async (req, res, next) => {
    try{
        const blocks = await Block.find();

        if(!blocks){
            return res.status(400).json({ message: 'No blocks found' });
        }

        let totalFlats = 0;
        let totalFilled = 0;
        let totalAvailable = 0;


        blocks.map(block => {
            totalFlats += block.flats.length;
            let filled = 0;
            let available = 0;
            block.flats.forEach(flat => {
              if (flat.flatStatus === "Available") {
                totalAvailable++;
                available++;
              } else if (flat.flatStatus === "Occupied") {
                totalFilled++;
                filled++;
              }
            });

          });
        return res.status(200).json({ blocks, totalFlats, totalFilled, totalAvailable });
    }
    catch(err){
        next(err);
    }
}

module.exports = { addBlock , getAllBlocks };