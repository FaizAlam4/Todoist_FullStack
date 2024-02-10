import { v4 as uuidv4 } from "uuid";

const commentModel = (sequelize, Sequelize) => {
  const Comment = sequelize.define(
    "comment",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue:uuidv4()
      },
      task_id: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      project_id: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      posted_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      content: {
        type: Sequelize.STRING,
        defaultValue: "none",
      },
      attachment: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: null,
      },
    },
    { timestamps: false }
  );
  return Comment;
};

export default commentModel;
