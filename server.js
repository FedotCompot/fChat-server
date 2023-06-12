const express = require('express');
const app = express();
const PORT = 4000;
require("dotenv").config();

const clientid = process.env.CLIENT_ID;;
const client_secret = process.env.CLIENT_SECRET;

app.use(express.static('../fChat'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/auth', (req, res) => {
    fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        body: `client_id=${clientid}&client_secret=${client_secret}&grant_type=client_credentials`
    }).then(access => access.json())
    .then(access => res.send({...access, client_id: clientid}));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));