const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: "john", lastName: "Doe"},
        {id: 2, firstName: "Chris", lastName: "Arzi"},
        {id: 3, firstName: "Jessie", lastName: "Havijian"},
    ];

    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server Started on ${port}`))