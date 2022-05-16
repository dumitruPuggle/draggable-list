const express = require('express')
const hapticjs = require('hapticjs')
const app = express()

app.get('/vibrate', (req, res) => {
    hapticjs.vibrate()
    res.send(200)
})


app.listen(3000, () => {
    console.log('Vibrate server started on port 3000')
})
