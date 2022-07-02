import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../dbStrategy/mongo.js';


export async function signUp(req, res) {
  const user = req.body;

  const passwordHash = bcrypt.hashSync(user.password, 10);

  await db.collection('users').insertOne({ ...user, password: passwordHash, confirm_password: passwordHash })

  res.sendStatus(201);
};


export async function signIn(req, res) {
  const user = req.body;

  const userDB = await db.collection('users').findOne({ email: user.email });

  if (userDB && bcrypt.compareSync(user.password, userDB.password)) {
    const token = uuid();

    await db.collection('sessions').insertOne({ token, userId: user._id });

    res.status(200).send(token);
  } else {
    res.sendStatus(401);
  }
}