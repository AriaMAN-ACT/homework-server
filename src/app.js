const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const userRouter = require('./routes/userRouter');
const lessonRouter = require('./routes/lessonRouter');
const classRouter = require('./routes/classRouter');
const gradeRouter = require('./routes/gradeRouter');
const schoolRouter = require('./routes/schoolRouter');
const homeworkRouter = require('./routes/homeworkRouter');
const homeworkAnswerRouter = require('./routes/homeworkAnswerRouter');
const errorController = require('./controllers/errorController');
const AppError = require('./utils/AppError');
const catchError = require('./utils/catchError');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use(fileUpload({
    createParentPath: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (isDev) {
    app.use(morgan('dev'))
}

app.use((req, res, next) => {
    const date = new Date();
    req.requestAt = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/lessons', lessonRouter);
app.use('/api/v1/classes', classRouter);
app.use('/api/v1/grades', gradeRouter);
app.use('/api/v1/schools', schoolRouter);
app.use('/api/v1/homework', homeworkRouter);
app.use('/api/v1/homeworkAnswers', homeworkAnswerRouter);

app.use('/api/v1/download/homeworkAnswers', express.static('uploads'));

app.all('*', catchError((req) => {
    throw new AppError(
        `Can\'t find ${req.originalUrl} on this server.`,
        404
    );
}));

app.use(errorController);

module.exports = app;