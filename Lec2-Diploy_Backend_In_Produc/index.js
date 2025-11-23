const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('My frist server')
})

app.get('/facebook', (res, req) => {
    res.send('Welcome to my facebook!')
})
app.get('/x', (res, req) => {
    res.send('Welcome to my twitter')
})
app.listen(port, () => {
    console.log(`My port is listen port is ${port}`)
})
