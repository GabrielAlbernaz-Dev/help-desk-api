import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Help Desk API' })
});

app.listen(port, () => {
  console.log(`Servidor running ${port}`)
});
