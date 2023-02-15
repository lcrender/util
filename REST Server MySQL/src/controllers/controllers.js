import {pool} from '../db.js'

export const get = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM users')
    res.status(200).json(rows)
    } catch (error) {res.status(500).json({message: "Error"})}
};
export const getOneId = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({message: "id no encontrado"})
    res.status(200).json(rows)
    } catch (error) {res.status(500).json({message: "Error"})}
};
export const post = async (req, res) => {
    try {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO users (name, salary) VALUES (?, ?)', [name, salary])
    res.status(201).json({id: rows.insertId, name, salary})
    } catch (error) {res.status(500).json({message: "Error"})}
};
export const put = async (req, res) => {
    try {
    const {id} = req.params;
    const {name, salary} = req.body;
    const [result] = await pool.query('UPDATE users SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    if (result.affectedRows === 0) return res.status(404).json({message: 'id no encontrado'})
    const [updatedResult] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    res.status(201).json(updatedResult[0])
    } catch (error) {res.status(500).json({message: "Error"})}
};
export const del = async (req, res) => {
    try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({message: "id no encontrado"})
    res.status(201).json({message: "Borrado correctamente"})
    } catch (error) {res.status(500).json({message: "Error"})}
};