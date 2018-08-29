const express = require("express")
const http = require("http")
const path = require("path")
const WebSocket = require('ws')

const app = express()
let server = http.createServer(app)
let ws = new WebSocket.Server({server})

ws.on('connection', (wsClient) => {
    wsClient.on('message', (msg) => {
        ws.clients.forEach( (cl) => {
            cl.send(msg)
        })
    })
})

app.use("/", express.static(path.resolve(__dirname, "../client/")))

server.listen(8000, () => {
    console.log('server listen 8000')
})