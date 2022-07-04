import balanceSchema from "../schemas/balanceSchema.js";

async function validateBalance(req, res, next) {
    const balance = req.body;
    const value = balance.value;
    balance.value = parseFloat(value);

    const validation = balanceSchema.validate(balance);

    if(validation.error) {
        return res.status(422).send("verifique se os campos estão preenchidos corretamente!")
    }

    next();
}

export default validateBalance;