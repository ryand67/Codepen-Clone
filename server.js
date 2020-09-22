const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})