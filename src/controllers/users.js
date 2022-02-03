import { response } from "express";
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";

export const index = async (req, res = response) => {
  const { limite = 15, desde = 0 } = req.query;

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({ estado: true }),
    Usuario.find({ estado: true }).skip(Number(desde)).limit(Number(limite))
  ]);

  res.json({ total, usuarios });
};

export const store = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //verificar si existe**
  // encriptar password
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //guardar en db
  await usuario.save();

  res.json({ usuario });
};



export const update = async (req, res = response) => {
  const id = req.params.id;
  // evita actualizar google, id y correo
  const {_id, password, google, correo, ...resto } = req.body;

  // TODO: validar contra db
  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  res.json({ usuario });
};



export const destroy = async(req, res) => {
  const { id } = req.params;
  // borrado fisico: no recomendado
  //const usuario = await Usuario.findByIdAndDelete(id)
  // cambia estado =false
  const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})
  res.json({ usuario });
};
