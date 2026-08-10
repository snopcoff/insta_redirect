const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/channel/Abbtqp2ycYco6EDv/', (req, res) => {
    const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(visitorIp)
    res.redirect(302, 'https://iplogger.com/2KqpX6');
})

app.listen(port, () => {
    console.log(`Redirect service running at http://localhost:${port}`)
})