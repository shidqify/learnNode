const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);

// app.get('/', (req, res) =>{
//     res.send("Hello World!");
// });

// app.get('/blog', (req, res) =>{
//     res.send("Hello Blog!");
// });


module.exports = app 