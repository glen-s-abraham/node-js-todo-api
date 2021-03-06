const morgan = require('morgan');
const express = require('express');
const app = express();
const AppError = require('./utils/AppError');
const handler = require('./controller/ErrorController');
const ToDoRouter = require('./routes/ToDoRoutes');



app.use(express.json());
app.use(morgan('dev'));

app.use('/api/to-do',ToDoRouter);
//unhandeld route exception
app.all('*',(req,res,next)=>{
    next(new AppError(`Can't find ${req.originalUrl}`,404));
});
app.use(handler);

module.exports = app;
