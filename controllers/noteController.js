const generator = require("../util/generator");
const memoryStorage = require("../util/memoryStorage");
const noteModel = require("../models/noteModel");

let getAllNotes = (req,res) => {
    let values = memoryStorage.getAllValues(memoryStorage.store);
    return res.send(JSON.stringify(values));
}

let gatNote = (req,res) => {
    let id = req.params.id;
    let note = memoryStorage.store.getItem(id);
    if (!note) {
        return res.status(401).send({error: "this note id is not found"});
    }
    return res.send(JSON.stringify(note));
}

let saveNote = (req,res) => {

    let id = generator.generate();
    let title = req.body.title;
    let content = req.body.content;
    let createdOn = new Date();

    if (!title || !content) {
        return res.status(500).send({error: "title and content must not be empty"});
    }
    
    let note = new noteModel.Note(id,title,content,createdOn);
    memoryStorage.store.setItem(id,note);
    return res.status(201).send("Successfully note saved");
}

let updateNote = (req,res) => {
    let id = req.params.id;
    let note = memoryStorage.store.getItem(id);
    if (!note) {
        return res.status(401).send({error: "this note id is not found"});
    }
    let obj = req.body;
    let keys = Object.keys(obj);
    
    for(let i = 0 ; i < keys.length ; ++i) {
        if (keys[i] in note) {
            note[keys[i]] = obj[keys[i]];
        }
    }

    memoryStorage.store.setItem(id,note);

    return res.send(JSON.stringify(note));
}

let deleteNote = (req,res) => {
    let id = req.params.id;
    let note = memoryStorage.store.getItem(id);
    if(!note) {
        return res.status(401).send({error: "this note id is not found"});
    }

    memoryStorage.store.removeItem(id);
    res.send("Successfully note deleted");
}

module.exports = {
    getAllNotes,
    gatNote,
    saveNote,
    updateNote,
    deleteNote
}