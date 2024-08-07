const Family = require("../../models/familyModel.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const familyLogin = async (req, res, next) => {
    try{
        const { emailOrMobile, password } = req.body;
        const family = await Family.findOne({
            $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
        });

        if(!family){
            return res.status(404).json({message: "Family not found" });
        }
        
        if(!(await bcrypt.compare(password, family.password))){
            return res.status(400).json({message: "Invalid password"});
        }

        var token = await jwt.sign(
            {id: family._id, name: family.familyDetails.primary.name, email: family.email, mobile: family.mobile},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );

        family.token = token;
        family.password = undefined;

        cookieOptions =  {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: false,
            secure: false,
            domain: 'localhost',
            path: '/'
        };

        res.status(200).cookie("token", token, cookieOptions).json({
            id: family._id,
            name: family.familyDetails.primary.name,
            email: family.email,
            mobile: family.mobile
        });
    }
    catch(err){
        next(err);
    }
};

const familyRegister = async (req, res, next) => {
    try{
        const { primary, members, mobile, alternativeMobile, email, password, block, flatNo } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newFamily = await Family.create({
            familyDetails: {
                primary,
                members,
            },
            mobile,
            alternativeMobile,
            email,
            password: hashedPassword,
            block,
            flatNo
        });

        
        res.status(201).json({ message: 'Family registered successfully', family: {
            id: newFamily._id,
            primary: newFamily.familyDetails.primary,
            mobile: newFamily.mobile,
            email: newFamily.email,
        } });
    }
    catch(err){
        next(err);
    }
};

module.exports = { familyRegister, familyLogin };