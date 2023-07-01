const express = require("express");
const noteContoller = require("../controllers/noteController");
const router = express.Router();

router.get("/notes",noteContoller.getAllNotes);
router.get("/notes/:id",noteContoller.gatNote);
router.post("/notes/save",noteContoller.saveNote);
router.put("/notes/update/:id",noteContoller.updateNote);
router.delete("/notes/delete/:id",noteContoller.deleteNote);

module.exports = router;
