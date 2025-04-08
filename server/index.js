// This file is defining our express server and running it on port 3000

const express = require('express')
const path =  require('path')
const app = express()
const port = 3000

// middleware
app.use(express.json()) // allows us to parse incoming JSON data from the client
app.use(express.urlencoded()) // allows us to parse incoming URL Encoded data

// add middleware for static files
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '../client/out'))) //make our client build folder public.

app.get('/test/api', (req, res)=>{
    res.send({
        message: "Success! Server is operational."
    })
})

app.get('/', (req, res) =>{
  res.sendFile(path.joint(__dirname, '../client/out', 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})