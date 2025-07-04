import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import logger from './middlewares/logger.js';
import rateLimiter from './middlewares/rateLimiter.js'; 
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));
app.use(logger);
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000...");
    });
}); 
