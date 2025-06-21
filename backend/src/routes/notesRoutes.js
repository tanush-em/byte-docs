import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote, getNote } from "../controllers/notesControllers.js";

const Router = express.Router();

Router.get("/", getAllNotes);
Router.get("/:id", getNote); 
Router.post("/", createNote);
Router.put("/:id", updateNote);
Router.delete("/:id", deleteNote);

export default Router;