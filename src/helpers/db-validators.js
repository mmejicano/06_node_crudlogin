import Role from "../models/role.js";
import Usuario from "../models/usuario.js";

export const esRoleValido = async (rol = "") => {
  const rolExiste = await Role.findOne({ rol });
  if (!rolExiste) {
    throw new Error("El rol no esta registrado en la DB");
  }
};

export const emailExiste = async (correo = "") => {
  const usuarioExiste = await Usuario.findOne({ correo });
  if (usuarioExiste) {
    throw new Error("Este correo ya esta registrado");
  }
};

export const idUserExiste = async (id = "") => {
  const idUsuarioExiste = await Usuario.findById(id);
  if (!idUsuarioExiste) {
    throw new Error("El id no existe");
  }
};

