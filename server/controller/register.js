//controller for registering new users

//imports
const express = require('express')
const bcrypt = require('bcryptjs')
const { profilePictureUpload } = require('../middleware/profilePictureUploadMiddleware')

const router = express.Router()

const User = require('../model/user')

const UserValidationSchema = require('../validation/userModelValidation')

const route = '/register'
//registers a new user

    router.post(route, profilePictureUpload.single('profile-picture'),async (req, res) => {

        //validating the data before adding it to the database
        const { error } = UserValidationSchema.validate(req.body)
        if (error) {
            res.status(400).send({ error: error.details[0].message })
            return
        }
        else {
    
            //checks to see if email or username are taken
            const query = User.findOne({
                $or: [{
                    email: req.body.email
                },
                {
                    username: req.body.username
                }]
            }).exec()
    
            if (await query) {
                res.status(400).send({ error: 'Email or username are taken' })
                return
            }
    
            //if there are no errors we add new user to the database
            const user = new User({
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password)
            })
            if(req.file) user.picture_id = req.file.id

        
            user.save().then(() => {
                res.send({ successful: true })
            }).catch(err => {
                //if insertion is unsuccessful we send the error back to the client
                res.status(400).send({ error: err })
            })
        }
})

module.exports = router  