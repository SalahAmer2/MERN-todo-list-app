const express = require('express');

const router = express.Router();

const ToDoList = require('../models/todolist');
const User = require('../models/user');

//Routes
router.get('/', (req, res) => {

    ToDoList.find({})
        .then((data) => {
            res.json(data);
            console.log('Data: ', data)
        })
        .catch((error) => {
            console.log('Error: ', error)
        })

});

router.post('/save/todoList', (req, res) => {
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

router.post('/save/register-user', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newUser = new User(data);

    // .save()

    newUser.save((error) => {
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

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("reached above User.findOne()")

    User.findOne({ email: email }, (err, foundUser) => {
        console.log("reached User.findOne()")
        if (err) {
            console.log(err);
            res.status(500).json({ msg: 'Sorry, internal server error' });
            return;
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    console.log('Logged in successfully')
                    return res.json({
                        msg: 'Logged in successfully'
                    });
                }
            } else {
                console.log('Wrong Email/Password')
                res.status(500).json({ msg: 'Sorry, internal server error' });
                return
            }
        }
    })
})

router.delete("/todoList/:_id/delete", (req, res) => {
    const requestedToDoListId = req.params._id;
    console.log('Requested todoList _id for deletion: ' + requestedToDoListId);

    ToDoList.deleteOne({ _id: requestedToDoListId })
        .then(() => {
            res.json("ToDo List deleted successfully")
        })
        .catch((error) => {
            console.log('ToDo List has NOT been deleted successfully, there has been an error: ' + error);
        })
})

module.exports = router;