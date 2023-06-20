import express from 'express'
import mongoose from 'mongoose'
import seedRouter from './routes/index.js'
import {config} from 'dotenv'
import data from './data/data.js'
import bookRouter from './routes/bookRoutes.js'

config()

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true }).then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
})

const app = express()
app.use('/api/seed',  seedRouter)
app.use('/api/book',  bookRouter)

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

app.get('/api/book', (req, res) => {
    res.send(data.books)
})



app.listen(process.env.PORT || 5000)