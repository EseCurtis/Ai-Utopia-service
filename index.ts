import express, { Request, Response } from 'express';
import { configDotenv } from 'dotenv';
import bodyParser from 'body-parser';
import apiRouter from '@/routes/api';
import ResponseFormat from '@/resources/ResFormat';
import bindResponseFormat, { BoundResponse } from '@/middlewares/bindResponseFormat';


configDotenv()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bindResponseFormat(ResponseFormat));
app.use("/api", apiRouter);

app.use((req: Request, res: BoundResponse) => {
  res.ResponseFormat.notFound("Nothing Found Here!")
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

console.log(process.env)



module.exports = app

