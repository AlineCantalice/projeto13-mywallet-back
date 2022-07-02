import bcrypt from 'bcrypt';
import { db } from '../dbStrategy/mongo.js';


export async function signUp(req, res) {
  const user = req.body;

  const passwordHash = bcrypt.hashSync(user.password, 10);

  await db.collection('users').insertOne({ ...user, password: passwordHash, confirm_password: passwordHash })

  res.sendStatus(201);
};