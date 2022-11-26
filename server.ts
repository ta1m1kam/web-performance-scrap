import express from "express";

const app: express.Express = express();

app.use(express.static('./dist'))
app.listen(3000, () => console.log('Listening on port 3000...'))
