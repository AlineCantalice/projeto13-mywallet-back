import { db } from "../dbStrategy/mongo.js"

async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    const session = await db.collection("sessions").findOne({ token });

    if (!session) {
        return res.status(401).send("token inválido");
    }

    res.locals.session = session;

    next();
}

export default validateToken;