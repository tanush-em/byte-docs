import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/notes", notesRoutes);
connectDB();

app.listen(3000,() => {
    console.log("Server is running on port 3000...")
})