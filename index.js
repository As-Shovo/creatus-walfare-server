const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/',  (req, res) =>{
    res.send('Welcome back backEnd server')
})

app.listen(port, ()=>{
    console.log('Running server on port', port)
})