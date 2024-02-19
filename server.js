import express from 'express';
import mongoose from 'mongoose';
import countryRoute from './src/routes/countryRoutes.js'; 
<<<<<<< HEAD
import cors from 'cors';
=======
import cors from 'cors'; 
>>>>>>> e7a36b598072c8f79554608b85e55c61f87a68e7

const app = express();
const port =  3000;

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use("/country", countryRoute);

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

mongoose
    .connect("mongodb+srv://Paises:4910247Jr@cluster0.5ocwqrw.mongodb.net/")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening to", port));
