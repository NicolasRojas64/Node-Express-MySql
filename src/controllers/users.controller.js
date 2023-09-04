import {pool} from '../db.js'

export const getUsers = async (req, res) =>{
    const result = await pool.query('select * from users');
    res.json(result);
}

export const createUSer = async (req, res) =>{
    const {user_name, password} = req.body;
    const [rows] = await pool.query('insert into users (user_name, password) values (?,?)', [user_name, password]);
    console.log("Nombre: ", user_name, "Password: ", password);
    res.send({
        id: rows.insertId,
        user_name,
        password
    });
}

export const putUser = (req, res) =>{
    res.send("Usuario modificado");
}

export const deleteUser = (req, res) =>{
    res.send("Usuario eliminado");
}