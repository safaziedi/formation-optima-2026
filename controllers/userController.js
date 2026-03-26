const User = require('../models/User.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserController = {
    // CREATE USER
    createUser: async (req, res) => {
        try {
            // console.log(req.body);
            const user = await User.findOne({ email: req.body.email })
            if (user) return res.status(409).json({ error: 'User Exist' });

            const users = await User.create(req.body);
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    // GET USER BY ID
    getUserById: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id }).select('-password') //to exclude fields
            if (!user || user == null) return res.status(404).json({ error: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // UPDATE USER
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });// { new: true } : retourner le document mis à jour plutôt que le document d'origine
            if (!user || user == null) return res.status(404).json({ error: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // DELETE USER
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User deleted')
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    // LOGIN
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user || user == null) return res.status(404).json({ error: 'User not found' });

            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({
                    userId: user.id,
                    role: user.role
                },
                    "oknhgvgijnkazertyuioqsdfghjkl", //secret key
                    {
                        expiresIn: '2d'  //1d = 1 day , w = week , m= month, h=hour ...
                    }
                )

                res.status(200).send({
                    email: user.email,
                    role: user.role,
                    token: token,
                })

            } else {
                res.status(400).json({ error: 'Wrong password' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = UserController;

