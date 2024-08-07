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

module.exports = { addBlock };