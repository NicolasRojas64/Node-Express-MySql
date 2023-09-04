import {pool} from '../db.js'

export const getUsers = async (req, res) =>{
    const result = await pool.query('select * from users');
    res.json(result);
}