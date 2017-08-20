const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
const config = require('./config');

let app = express();
app.use(bodyParser.json());
app.use(cors());

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})


app.get('/api/shelf/:id', controller.getShelves)
app.get('/api/bin/:id', controller.getBin)
app.put('/api/bin/:id', controller.editBin)
app.delete('/api/bin/:id', controller.deleteBin)
app.post('/api/bin/:id', controller.createBin)



app.listen(3040, () => {
    console.log("Listening on port " + 3040)
})