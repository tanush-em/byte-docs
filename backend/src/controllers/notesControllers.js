import { Note } from "../models/Note.js";

export async function getNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).send("Internal server error");
    }
}

export async function createNote(req, res) {
    try {
        const {title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).send("Note created successfully");

    } catch (error) {
        console.error("Error in creating note:", error);
        res.status(500).send("Internal server error");
    }
}

export function updateNote(req, res){
    try {

    }catch 
}

export function deleteNote(req, res) {
    res.status(200).send("Note deleted successfully");
}