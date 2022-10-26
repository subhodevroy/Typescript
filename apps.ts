import express from 'express';
import todosRoute from './routes/todos';
import bodyParser from 'body-parser';
const apps=express()
apps.use(bodyParser.json())
apps.use(todosRoute);
apps.listen(3000)