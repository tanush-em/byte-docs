export function getNotes(req, res) {
    res.status(200).send("Notes fetched successfully");
}

export function createNote(req, res) {
    res.status(201).send("Note created successfully");
}

export function updateNote(req, res){
    res.status(200).send("Notes updated successfully");
}

export function deleteNote(req, res) {
    res.status(200).send("Note deleted successfully");
}