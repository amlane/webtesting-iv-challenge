const express = require("express");

const Friends = require("../friends/friendsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "is alive" });
});

server.get("/friends", (req, res) => {
  Friends.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/friends", (req, res) => {
  Friends.insert(req.body)
    .then(newFriend => {
      res.status(201).json(newFriend);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
