import express from "express";
import { createNote, deleteNote, getNotes, updateNote } from "../controllers/notesControllers";

const Router = express.Router();

Router.get("/", getNotes);
Router.post("/", createNote);
Router.put("/:id", updateNote);
Router.delete("/:id", deleteNote);

export default Router;