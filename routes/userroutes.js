const express=require('express')
const router=express.router()
const user=require('../controllers/usercontroller')
const validation=require("../validators/users/uservalidation")
router.post('/registeruser',validation.registerUserValidation,user.Signup)

module.exports=router;
