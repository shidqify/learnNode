const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use("/posts", postsRoute)

// app.get('/', (req, res) =>{
//     res.send("Hello World!");
// });

// app.get('/blog', (req, res) =>{
//     res.send("Hello Blog!");
// });


module.exports = app 