
import { response } from "express";
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";
import {generarJwt} from "../helpers/generar-jwt.js";

export const login = async (req, res = response) => {
  const {correo, password} = req.body

  try {
  //verificar si email existe
  const usuario = await Usuario.findOne({correo})
  if(!usuario){
    return res.status(400).json({
      msg: 'usuario/passwor no correctos - mail'
    })
  }
  
  // si user es activo
  if(!usuario.estado){
    return res.status(400).json({
      msg: 'usuario/passwor no correctos - estado'
    })
  }
  
  //verifica pass
  const validPassword = bcryptjs.compareSync(password, usuario.password);
  if(!validPassword){
    return res.status(400).json({
      msg: 'usuario/passwor no correctos - pass'
    })
  }
  //genera jwt
  const token = await generarJwt(usuario.id)

  res.json({usuario, token}) // no se return porque solo puede ejecutar uno a la vez

  } catch (error) {
    return res.status(500).json({
      msg: 'Hable con el admin'
    })
  }
  
}