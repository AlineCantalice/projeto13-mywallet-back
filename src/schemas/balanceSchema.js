import joi from "joi";

const balanceSchema = joi.object({
    title: joi.string().required(),
    value: joi.string().required(),
    type: joi.string().valid("deposit").valid("withdraw").required()
});

export default balanceSchema;