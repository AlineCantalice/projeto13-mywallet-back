import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../dbStrategy/mongo.js';


export async function signUp(req, res) {
  const user = req.body;

  const passwordHash = bcrypt.hashSync(user.password, 10);

  try {
    const existEmail = await db.collection('users').findOne({ email: user.email });

    if (existEmail) {
      return res.status(409).send("email já cadastrado");
    }

    await db.collection('users').insertOne({ ...user, password: passwordHash, confirm_password: passwordHash })

    res.status(201).send("Cadastro criado com sucesso!");
  } catch {
    res.status(500).send("erro ao cadastrar usuário");
  }
};


export async function signIn(req, res) {
  const user = req.body;
  try {
    const userDB = await db.collection('users').findOne({ email: user.email });
    
    if (userDB && bcrypt.compareSync(user.password, userDB.password)) {
      const token = uuid();

      await db.collection('sessions').insertOne({ token, userId: userDB._id });

      delete userDB.password;
      res.status(200).send({ ...userDB, token });
    } else {
      return res.status(401).send("senha ou email incorretos");
    }
  } catch {
    res.status(500).send("erro ao logar!!");
  }
}