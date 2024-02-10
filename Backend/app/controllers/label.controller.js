import db from "../models/index.js";
import { v4 as uuidv4 } from "uuid";

const Label = db.labels;

export const getLabelsAll = (req, res) => {
  Label.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

export const getLabelById = (req, res) => {
  const id = req.params.id;
  Label.findByPk(id)
    .then((data) => {
      res
        .status(200)
        .send({ message: "Successfully found the project", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const createLabel = (req, res) => {
  if (req.body.name && req.body.name.trim() == "") {
    res.status(500).send({ message: "content of comment cann't be empty!" });
  }
  Label.create({ ...req.body })
    .then((data) => {
      res
        .status(200)
        .send({ message: "Successfully created comment!", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const updateLabel = (req, res) => {
  const myId = req.params.id;
  Label.update(req.body, { where: { id: myId }, returning: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const deleteLabel = (req, res) => {
  const id = req.params.id;
  Label.destroy({ where: { id: id } })
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
