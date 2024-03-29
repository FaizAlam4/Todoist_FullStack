import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

import projectModel from "./project.model.js";
import taskModel from "./task.model.js";
import userModel from "./user.model.js";
import commentModel from "./comment.model.js";
import labelModel from "./label.model.js";

db.projects = projectModel(sequelize, Sequelize);
db.tasks = taskModel(sequelize, Sequelize);
db.users = userModel(sequelize, Sequelize);
db.comments = commentModel(sequelize, Sequelize);
db.labels = labelModel(sequelize, Sequelize);

//association for user,project,task

db.users.hasMany(db.projects, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

db.projects.belongsTo(db.users);

db.projects.hasMany(db.tasks, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
});
db.tasks.belongsTo(db.projects);

export default db;
