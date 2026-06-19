const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/admin-login", async (req, res) => {
  try {
    const { username, password } = req.body;



    const admin = await Admin.findOne({ username });


    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );


    if (!isMatch) {
  return res.status(401).json({
    success: false,
    message: "Unauthorized Access",
  });
}

const token = jwt.sign(
  { id: admin._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

res.json({
  success: true,
  token,
});

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;