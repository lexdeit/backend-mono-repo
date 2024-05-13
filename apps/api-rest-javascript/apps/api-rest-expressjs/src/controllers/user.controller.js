import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
            id,
        ]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error("Error al obtener usuario por ID:", error);
        return res.status(500).json({ message: "Algo salió mal al obtener el usuario" });
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM users WHERE user_id = ?", [id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error("Error al eliminar usuario por ID:", error);
        return res.status(500).json({ message: "Algo salió mal al eliminar el usuario" });
    }
};

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const result = await pool.query(
            "INSERT INTO users (first_name, last_name, email_address) VALUES (?, ?, ?)",
            [firstName, lastName, email]
        );
        const insertedUserId = result.insertId;
        res.status(201).json({ userId: insertedUserId, firstName, lastName, email });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;

        const [result] = await pool.query(
            "UPDATE users SET first_name = IFNULL(?, first_name), last_name = IFNULL(?, last_name), email_address = IFNULL(?, email_address) WHERE user_id = ?",
            [firstName, lastName, email, id]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "User not found" });

        const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
            id,
        ]);

        res.json(rows[0]);
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        return res.status(500).json({ message: "Algo salió mal al actualizar el usuario" });
    }
};