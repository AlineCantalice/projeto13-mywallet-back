import dayjs from 'dayjs';
import { db, objectId } from "../dbStrategy/mongo.js";

export async function getBalance(req, res) {
    const session = res.locals.session;

    const balance = await db.collection("balances").find({ userId: new objectId(session.userId) }).toArray();

    res.send(balance);
}

export async function postBalance(req, res) {
    const balance = req.body;
    const newValue = parseFloat(balance.value).toFixed(2);
    const session = res.locals.session;

    try {
        await db.collection("balances").insertOne({ ...balance, value: newValue, userId: session.userId, day: dayjs().format("DD/MM") });

        res.status(200).send("registro criado com sucesso!");
    } catch (error) {
        res.status(500).send("erro ao criar o registro");
    }
}