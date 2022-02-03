import { Router } from "express";
import { login} from "../controllers/auth.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
const router = Router();

router.post("/login", [
  check('correo', 'un correo valido es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatorio').not().isEmpty(),
  validarCampos
],login);


export default router;