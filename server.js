const express = require('express')
const app = express()
const { UAParser } = require('ua-parser-js');
const port = process.env.PORT || 3000
const redirectUrl = 'https://iplogger.com/2KqpX6'
const instaUrl = 'https://www.instagram.com'

app.use((req, res) => {
    const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const paths = req.originalUrl;
    const userAgent = req.headers['user-agent'];
    const parser = new UAParser(userAgent);
    const deviceData = parser.getResult();
    const { device, os, browser } = deviceData;

    const info = {
        ip: visitorIp,
        deviceType: device.type,
        deviceVendor: device.vendor,
        devideModel: device.model,
        osName: os.name,
        browserName: browser.name
    }
    console.log(info);

    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    res.redirect(302, `${instaUrl}${paths}`);
})

app.listen(port, () => {
    console.log(`Redirect service running at http://localhost:${port}`)
})