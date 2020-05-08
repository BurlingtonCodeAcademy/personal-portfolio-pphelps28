const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const http = require('http')
const enforce = require('express-sslify')

app.use(express.static(path.resolve('./client/build')))
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build/index.html'))
})

http.createServer(app).listen(app.get('port'), function () {
    console.log("Listening on port: " + port)
})