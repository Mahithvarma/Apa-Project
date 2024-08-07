const jwt = require('jsonwebtoken');
const Admin = require('../../models/adminModel.js');
const bcrypt = require('bcryptjs');

const adminLogin = async (req, res, next) => {
    const { emailOrMobile, password } = req.body;

    try {

        const admin = await Admin.findOne({
            $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
        });

        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        cookieOptions =  {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: false,
            secure: false,
            domain: 'localhost',
            path: '/'
        };

        return res.status(200).cookie('token', token, cookieOptions).json({
            message: 'Login successful', admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            }
        });
    } catch (err) {
        next(err);
    }
};

const adminRegister = async (req, res, next) => {
    const { name, email, mobile, password, role, aadhaar, address } = req.body;

    try {
        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { mobile }]
        });
    
        if (existingAdmin) {
            return res.status(409).json({ message: 'Email or mobile number already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({
            name,
            email,
            mobile,
            password: hashedPassword,
            role,
            aadhaar,
            address,
        });

        return res.status(201).json({
            message: 'Registration successful', admin: {
                id: newAdmin._id,
                name: newAdmin.name,
                email: newAdmin.email,
                role: newAdmin.role,
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { adminLogin, adminRegister };