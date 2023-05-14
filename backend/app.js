const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())

app.use(cors())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'schema'
})


app.get('/pets', (req, res) => {
    const q = 'SELECT * FROM animals'
    conn.query(q,(err, data) =>{
        if(err) res.send(err)
        else res.send(data)
    })  
})


app.post('/pets', (req,res)=> {
    const animal = req.body
    const q = 'INSERT INTO animals (`type`, `breed`, `desc`, `age`, `host`) VALUES (?)'
    const values = [animal.type, animal.breed, animal.desc, animal.age, animal.host]
    conn.query(q, [values], (err, data) => { 
        if(err) res.send(err)
        else res.send("Your pet successfully added")
    })
})

app.delete('/pets/:id', (req, res) => {
    const q = 'DELETE FROM animals WHERE id = ?'
    conn.query(q,[req.params.id], (err, data) => {
        if(err) res.send(err)
        else res.send('Your pet successfully removed from the list')
    })
})

app.put('/pets/:id', (req,res) => {
    const animalId = req.params.id
    const animal = req.body
    const q = 'UPDATE animals SET `type` = ?, `breed` = ?, `desc` = ?, `age` = ?, `host` = ? WHERE `id` = ?'
    const values = [animal.type, animal.breed, animal.desc, animal.age, animal.host]
    conn.query(q,[...values, animalId], (err,data) => {
        if (err) res.send(err)
        else res.send('You successfully updated information about your pet')
    })
})


app.listen(3000,()=>{
    console.log('Animals in da hus')
})