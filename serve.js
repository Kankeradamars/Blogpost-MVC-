
import express from "express";
import bodyParse from "body-parser";
import Authroute from './server/Router/Authroute';
import blogpostAuthroute from './server/Router/blogpostRouter';
import dotenv from "dotenv";

const app = express();
dotenv.config({path:"./.env"});

app.use(bodyParse.json());
app.use('/api/v1/blogpost' ,Authroute);
app.use('/api/v1/blog' , blogpostAuthroute);

app.use('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "This is a Blogpost API"
    })
})
const port= process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
export default app;


