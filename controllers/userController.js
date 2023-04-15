const asyncHandler = require('express-async-handler');
const User = require('../backend/models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all required fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    })

    if (user) {
        res.status(201).json(
            {
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic
            }
        )
    }
    else {
        res.status(400);
        throw new Error('Failed to create user')
    }
}
)



module.exports = { registerUser }