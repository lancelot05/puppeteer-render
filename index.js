const express = require('express');
const { automation } = require('./automation');


app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(req, res) => {
    automation(res);
    //res.send("Render Puppeteer server is running!")
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}!`);
});


