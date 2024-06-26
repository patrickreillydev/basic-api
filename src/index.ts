import express from 'express'
import dotenv from 'dotenv'
import searchRouter from './modules/search/search.router'
import fs from 'fs'
dotenv.config()
const PORT = process.env.EXPRESS_APP_PORT || 4006
const app = express()

/** Routes */
app.use('/api/search', searchRouter)

/** Basic Application View */
app.get('/', (req, res) => {
    const index = __dirname.concat('/template/index.html')
    fs.readFile(index, 'utf-8', (err, data) => {
        if (err) {
            res.send('error')
            return
        }
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`API listening on port: ${PORT}`)
})
