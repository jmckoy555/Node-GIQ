const express = require('express');
const app = express();

var data = require('./database.json');

app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send('Could not find information.')
    } res.send(data)
})
// Whatever parameters you enter it will find by ID.
app.get('/employees/:id', (req, res) => {
    // .workers grabbers to array from the data..find grabs the id you want
    const finder = data.employees.find(function (employees) {
        // ParseInt turns strings into numbers. Making a request and requesting the paramaters of the ID. Then it will have to equal employee IDS. If it does not match error message. Params brings in the parameters
        return parseInt(req.params.id) === employees.id
    })



    // If data is not found then send this error message.! means not
    if (!finder) {
        res.status(404).send('Could not find information')
    }
    // Otherwise send data
    res.send(finder)
    // sending a response over
    // res.send('Welcome Mr. Hunt')
})

app.listen(3005);