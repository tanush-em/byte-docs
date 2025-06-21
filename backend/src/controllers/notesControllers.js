import { Note } from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).send("Internal server error");
    }
}

export async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error fetching note:", error);
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

export async function updateNote(req, res){
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        )
        if (!updateNote) {
            res.status(404).send("Note not found");
        }
        res.status(200).send("Note updated successfully");
    }catch(error){
        console.log("Error in updating note:", error);
        res.status(500).send("Internal server error");
    }
}

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        
        if (!deletedNote) {
            return res.status(404).send("Note not found");
        }

    } catch (error) {
        console.error("Error in deleting note:", error);
        res.status(500).send("Internal server error");
    }
}