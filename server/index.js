import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import Connection from './database/db.js';
import BuidingRouter from './routes/building.js'
import StudentRouter from './routes/student.js'
import SearchRouter from './routes/search.js'
import RoomRouter from './routes/room.js'
import ScheduleRouter from './routes/schedule.js'
import CourseRouter from './routes/course.js'
import EventRouter from './routes/event.js'
const app = express();

const PORT = 8000;
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

await Connection();


app.use('/',BuidingRouter);
app.use('/',StudentRouter);
app.use('/',SearchRouter);
app.use('/',RoomRouter); 
app.use('/', ScheduleRouter);
app.use('/', CourseRouter); 
app.use('/', EventRouter);

app.listen(PORT, () => console.log(`Your server is running successfully on port ${PORT}`))