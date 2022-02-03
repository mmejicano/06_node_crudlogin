import { Router } from "express";
import { index, store, update, destroy } from "../controllers/users.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { esRoleValido, emailExiste, idUserExiste } from "../helpers/db-validators.js";
const router = Router();

router.get("/", index);
// router.get("/:id", show);

router.post("/", [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe ser mas de 6 caracteres').isLength({min:6}),
  check('correo', 'El correo no es valido').isEmail(),
  check('correo').custom(emailExiste),
  check('rol').custom(esRoleValido),
  validarCampos
], store);

router.put("/:id", [
  check('id', 'No es un id valido').isMongoId(),
  check('id').custom(idUserExiste),
  check('rol').custom(esRoleValido),
  validarCampos
], update);

router.delete("/:id", [
  check('id', 'No es un id valido').isMongoId(),
  check('id').custom(idUserExiste),
  validarCampos
], destroy);

export default router;