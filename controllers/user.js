const { response } = require("express");
const cache = require("memory-cache");

const getUsers = async (req, res = response) => {
    const users = await cache.get("users");

    console.log("get users ", users);

    if (users !== null) {
        res.status(200).json({
            ok: true,
            userCache: users
        });
    } else {
        res.status(404).json({
            ok: false,
            msg: "No existen usuarios registrados"
        });
    }
};

const users = [];

const createUser = async(req, res = response) => {
    try {
        const { name, age, date_birth } = req.body;

        let newUser = {
            name,
            age,
            date_birth
        };

        users.push(newUser);

        await cache.put("users", users);

        return res.status(200).json({
            ok: true,
            users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
};

module.exports = {
    getUsers,
    createUser
};
