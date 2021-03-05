const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

const routes = require('./routes/api')

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, console.log(`Server running on port ${PORT}`));