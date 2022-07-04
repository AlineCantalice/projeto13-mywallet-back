import loginSchema from "../schemas/loginSchema.js";

async function validateLogin(req, res, next) {

    const validation = loginSchema.validate(req.body);

    if(validation.error) {
        return res.status(422).send("verifique se os campos estão preenchidos corretamente!")
    }

    next();
}

export default validateLogin;