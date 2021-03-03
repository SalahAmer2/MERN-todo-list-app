const express = require('express');

const router = express.Router();

const ToDoList = require('../models/todolist');

//Routes
router.get('/', (req, res) => {

    ToDoList.find({})
        .then((data) => {
            res.json(data);
            // console.log('Data: ', JSON.parse(data))
            console.log('Data: ', data)
        })
        .catch((error) => {
            console.log('Error: ', error)
        })

});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newToDoList = new ToDoList(data);

    // .save()

    newToDoList.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server error' });
            return;
        }

        console.log('It is reaching here');

        //ToDoList
        return res.json({
            msg: 'Your data has been saved!'
        });
    });

});

router.get('/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

module.exports = router;