import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import indexRouter from "./routes/app.routes.js";
import usersRouter from "./routes/user.routes.js";
// import indexRouter from "./routes/app.routes.js";

dotenv.config();

// app
const app = express();

const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// database connection with retry mechanism
const connectDB = async (retries = 5, delay = 5000) => {
    while (retries) {
        try {
            const MONGO_URI = process.env.MONGO_URI;
            await mongoose.connect(MONGO_URI);
            console.log("Database connected");
            return;
        } catch (err) {
            console.error(`Database connection error: ${err}. Retries left: ${retries - 1}`);
            retries -= 1;
            if (retries === 0) {
                process.exit(1); // Exit process with failure
            }
            await new Promise(res => setTimeout(res, delay));
        }
    }
};

// start app
const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer()
    .then(() => console.log("Server started"))
    .catch(err => console.error(`Error starting server: ${err}`));
