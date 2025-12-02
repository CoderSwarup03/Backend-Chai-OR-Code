require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('My frist server')
})

app.get('/about', (req, res) => {
    res.send('My about server')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>My youtube server</h1>')
})
app.get('/profile', (req, res) => {
    res.send('Welcome to my profiles');
})

app.listen(process.env.PORT, () => {
    console.log(`My port is listen port is ${port}`)
})
