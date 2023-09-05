import {pool} from '../db.js'

export const getUsers = async (req, res) =>{
    const [result] = await pool.query('select * from users');
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

export const getUSer = async (req, res) =>{
    let index = req.params.id;
    const [user] = await pool.query('select * from users where id = ?', [index]);
    if(user.length == 0) return res.status(404).json({
        message: "Usuario no encontrado"
    })
    res.json(user[0]);
}

export const updateUser = async (req, res) =>{
    const {id} = req.params;
    const {user_name, password} = req.body;
    const [users] = await pool.query('UPDATE users SET user_name = IFNULL(?, user_name), password = IFNULL(?, password) WHERE id = ?', [user_name, password, id]);
    const [user] = await pool.query('SELECT * from users where id = ?', [id]);
    res.json(user[0]);
}

export const deleteUser = async(req, res) =>{
    const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    console.log(rows);
    if(rows.affectedRows == 0) return res.send("El usuario no existe en la base de datos");
    res.send("Usuario eliminado");
}
