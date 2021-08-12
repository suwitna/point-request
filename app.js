const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.get('/', (req, res) => res.send('Hello World'))
app.get('/webhook', (req, res) => res.send('Hello World'))
app.listen(port, () => {
console.log(`Server is running on port : ${port}`)
})

module.exports = app