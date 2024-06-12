const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.sendFile('C:\\Users\\User\\Documents\\мк\\js level2\\lesson4(1)\\index.html')
})

app.get('/info',(req,res) => {

    if(res.status(404)){
        res.send('<h2>Ошибка</h2>')
    }
})

app.post('/form', (req,res) => {
    let id = res.params.id
})
app.listen(port, () => console.log(`http://localhost:${port}`))