// const http = require('http')
// const hostname = 'localhost'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World!')
// })

// server.listen(port, hostname, () =>{
//     console.log(`http://${hostname}:${port}`)
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World')
})
app.listen(port, () => console.log(`http://localhost:${port}`))