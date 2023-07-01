const express = require("express");
const bodyParser = require("body-parser");
const noterRouter = require("./routes/noteRoute");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("server run...")
})

app.use('/api/v1',noterRouter);

app.listen(3000, () => {
    console.log("server run ................");
})