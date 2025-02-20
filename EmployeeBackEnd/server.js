const express = require('express');
const app = new express();
const ejs = require('ejs');
const morgan = require('morgan');
const routes= require('./routes/router');
const userRoutes= require('./routes/userRoute');
const loginRoutes= require('./routes/loginRoute');


const cors= require('cors');
app.use(cors());

app.use(morgan('dev'));
app.set('view engine','ejs');
app.set("views",__dirname+'/views');
app.use(express.static('public'));
app.use("/",routes);
app.use("/user",userRoutes);
app.use("/login",loginRoutes);


require('dotenv').config();
require('./db/connectiondb');



app.listen(process.env.PORT, () => {
    console.log(`Server is active on Port ${process.env.PORT}`);
});