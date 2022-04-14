const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

// const { type } = require('express/lib/response');
app.use(express.static('public'));
//parse uncoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSOON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



