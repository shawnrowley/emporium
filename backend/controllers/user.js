import asyncHandler from "express-async-handler";
import User from "../models/user.js";

// @desc    Auth user & get token

const authUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  res.send({
    email,
    password,
  });
});

export { authUser };
