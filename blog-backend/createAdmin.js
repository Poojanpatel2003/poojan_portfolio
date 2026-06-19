const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {

  const hashedPassword = await bcrypt.hash(
    "Poojan@2609",
    10
  );

  await Admin.create({
    username: "Poojan2609",
    password: hashedPassword,
  });
  process.exit();
}

createAdmin();