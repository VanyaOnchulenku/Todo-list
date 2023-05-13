const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())

app.use(cors())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'ivan',
    password: 'root',
    database: 'todo'
})