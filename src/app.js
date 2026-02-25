const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message : "note created sucessfully"
    })
});

app.get('/notes', (req,res)=>{
    res.status(200).json({
        message :"notes fetched sucessfully",
        notes : notes
    });
});

app.delete('/notes/:idx',(req,res)=>{
    const idx = req.params.idx;
    delete notes [idx];
    res.status(200).json({
        message: "note deleted sucessfully",
    });
});


module.exports = app;