import db from "../models/index.js";
import { v4 as uuidv4 } from "uuid";

const Comment = db.comments;

export const getCommentAll = (req, res) => {
  Comment.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

export const getCommentById = (req, res) => {
  const id = req.params.id;
  Comment.findByPk(id)
    .then((data) => {
      res
        .status(200)
        .send({ message: "Successfully found the project", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const createComment = (req, res) => {
    if (req.body.content && req.body.content.trim() == "") {
        res.status(500).send({ message: "content of comment cann't be empty!" });
      } 
  Comment.create({...req.body})
    .then((data) => {
      res
        .status(200)
        .send({ message: "Successfully created comment!", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const updateComment = (req, res) => {
  const myId = req.params.id;
  Comment.update(req.body, { where: { id:myId }, returning: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const deleteComment = (req, res) => {
  const id = req.params.id;
  Comment.destroy({ where: { id: id } })
    .then((data) => {
      if (data == 1) {
        res.status(200).send({ message: "Comment deleted successfully..." });
      } else {
        res.send({ message: `Could not delete the comment with id=${id}` });
      }
    })
    .catch((err) => {
      res.send({ message: `Could not delete the comment with id=${id}` });
    });
};
