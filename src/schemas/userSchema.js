import joi from "joi";

const userSchema = joi.object({
    name: joi.string().regex(/^([A-Za-z0-9]){4,20}$/).required(),
    email: joi.string().email().required(),
    password: joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required(),
    confirm_password: joi.string().valid(joi.ref('password')).required()
});

export default userSchema;