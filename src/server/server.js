const express = require('express')
const http = require('http')
const path = require('path')

let app = express()
let server = http.createServer(app)

app.get("/", (res, resp) => {
    resp.sendfile(path.resolve(__dirname, '..', 'client', 'index.html'))
    resp.end()
})

app.listen(8000, () => {
    console.log('subiu!!!!!!!!!!!')
})