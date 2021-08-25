import express from 'express'
import routes from './routes/routes.js'


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


routes(app)


app.listen(port, () => console.log(`Server running at http://localhost:${port}`))