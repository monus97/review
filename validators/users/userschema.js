const joi=require('@hapi/joi')

const schema={
    registeruser:joi.object({
    user_name:joi.String().max(20).required(),
    user_email:joi.String().email().required(),
    password:joi.String().max(6).required(),
    mobile_number:joi.number().integer().min(1000000000).max(9999999999)
    .message("invalid mobile number").required(),
    city:joi.String().required(),
    state:joi.String().required()
    })
}