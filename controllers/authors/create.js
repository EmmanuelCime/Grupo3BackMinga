import Author from "../../models/Author.js";
import User from "../../models/User.js";

let create = async (req, res, next) => {
    try {
        let author = req.body // Datos del nuevo autor enviados desde el frontend
        const { userId } = author // Extraer userId del cuerpo de la solicitud

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" })
        }

        // Crear el nuevo autor
        let newAuthor = await Author.create(author)

        // Actualizar el rol del usuario a "author" (rol 1)
        await User.findByIdAndUpdate(userId, { role: 1 }, { new: true })

        return res.status(201).json({ response: newAuthor })
    } catch (error) {
        next(error)
    }
};

export { create }
