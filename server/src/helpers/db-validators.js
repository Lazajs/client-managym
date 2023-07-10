const { Activity, User } = require("../models");

//function that checks if the activity exists in the database
const activityExistById = async id => {
  const activityExist = await Activity.findById(id);

  if (!activityExist) {
    throw new Error(`There is no activity with the id ${id}`);
  }
};

const idIsNotAdmin = async id => {
  const user = await User.findById(id);

  if (user.role === "admin") {
    throw new Error(`Not allowed to change admin status`);
  }
};

module.exports = { activityExistById, idIsNotAdmin };
