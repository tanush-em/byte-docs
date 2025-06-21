import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {
    res.status(200).send("Notes fetched successfully");
})

Router.post("/", (req, res) => {
    res.status(201).send("Note created successfully");
})

Router.put("/:id", (req, res) => {
    res.status(200).send("Notes updated successfully");
})

Router.delete("/:id", (req, res) => {
    res.status(200).send("Note deleted successfully");
})

export default Router;