const Block = require("../../models/blockModel.js");
const mongoose = require("mongoose");

const addFlat = async (req, res, next) => {
    try{
        const { blockId } = req.params;
        const { flatNo, flatType, flatArea, flatPrice, flatStatus } = req.body;

        const newFlat = {
            flatNo,
            flatType,
            flatArea,
            flatPrice,
            flatStatus,
          };

        const existingFlat = await Block.findOne({ _id: new mongoose.Types.ObjectId(blockId), flats: { $elemMatch: { flatNo: flatNo } } });

        if(existingFlat){
            return res.status(400).json({ message: 'Flat already exists' });
        }

        const updatedBlock = await Block.findByIdAndUpdate(
            blockId,
            { $push: { flats: newFlat } },
            { new: true, useFindAndModify: false }
        );

        if(updatedBlock){
            return res.status(201).json({ message: `Flat added successfully to the ${updatedBlock.name}` });
        }
        
        return res.status(400).json({ message: 'Error adding block', error });
    }
    catch(err){
        next(err);
    }
};


const allocateFlat = async (req, res, next) => {
    try{
        const { blockId, flatNo, familyId } = req.body;

        const existingFlat = await Block.findOne(
            { _id: new mongoose.Types.ObjectId(blockId), "flats.flatNo": flatNo },
            { "flats.$": 1 }
        );
          
        if (!existingFlat || !existingFlat.flats.length) {
        return res.status(404).json({ message: 'Flat not found' });
        }

        if(existingFlat.flats[0].flatStatus === "Occupied"){
            return res.status(400).json({ message: 'Flat already occupied' });
        }

        const updatedFlat = await Block.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(blockId), flats: { $elemMatch: { flatNo: flatNo } } },
            { $set: { "flats.$.flatStatus": "Occupied", "flats.$.flatFamily": new mongoose.Types.ObjectId(familyId) } },
            { new: true, useFindAndModify: false }
        );

        console.log(updatedFlat);

        if(updatedFlat){
            return res.status(201).json({ message: `Flat allocated successfully` });
        }


    } catch(err){
        next(err);
    }
};

module.exports = { addFlat, allocateFlat };