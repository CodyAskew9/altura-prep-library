import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
    {
        title: {type: String},
        author: {type: String},
        isbn: {type: String},
        level: {type: String},
        image: {type: String},
        count: {type: Number}
    }
)

const Book = mongoose.model('Book', bookSchema)
export default Book