const { Router } = require("express");
const router = Router();
const {check} = require('express-validator');

const { getUsers, createUser } = require("../controllers/user");
const { validateFields } = require("../middlewares/fields-validation");

// Obtener usuarios
router.get("/", getUsers);

// Crear usuario
router.post(
    "/",
    [
        check('name', 'Nombre es requerido').not().isEmpty(),
        check('age', 'Edad es requerida').not().isEmpty(),
        check('date_birth', 'Fecha de nacimiento es requerida').not().isEmpty(),
        validateFields
    ], 
    createUser
);

module.exports = router;
