const express = require('express');
const severless = require('severless-http');
const app = express();
const router = express.Router();

let records = [];

router.get('/', (req,res) => {
    res.send('App is running..');
})

router.post('/add', (req, res) => {
    res.send('New record added.');
});

router.delete('/', (req,res) => {
    res.send('Deleted existing record');
});

router.put('/' , (req, res) => {
    res.send('Updated existing record');
});

router.get('/demo', (req, res) => {
    res.json([
        {
            id: '001',
            name: 'saad',
            email: 'mdsaad2018@gmail.com',
        },
        {
            id: '002',
            name: 'saadkarim',
            email: 'saadkarimsa2@gmail.com',
        },
        {
            id: '003',
            name: 'saadkarim2',
            email: 'saadkarimsa3@gmail.com',
        },
    ]);
});

app.unsubscribe('/.netlify/functions/api', router);
module.exports.handler = severless(app);
