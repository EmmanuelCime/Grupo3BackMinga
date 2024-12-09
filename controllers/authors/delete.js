import Author from "../../models/Author.js";
import User from "../../models/User.js";

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params

        // Verifica si el autor existe
        const author = await Author.findById(id)
        if (!author) {
            return res.status(404).json({ message: "Author not found" })
        }

        // Elimina el autor
        const deletedAuthor = await Author.findByIdAndDelete(id)

        // Restablece el rol del usuario relacionado si existe
        if (author.userId) {
            await User.findByIdAndUpdate(author.userId, { role: 0 }, { new: true })
        }

        return res.status(200).json({ response: deletedAuthor, message: "Author deleted successfully" })
    } catch (error) {
        next(error)
    }
};

export { deleteOne }