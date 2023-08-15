import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'welcome to bearded dare back-end'
    });
});

app.listen(port, () => {
    console.log(`Bearded dare backend listening on port ${port}`);
});