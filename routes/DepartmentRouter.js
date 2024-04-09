const express = require("express");
const router = express.Router();
const {
  getAllDepartments,
  createDepartment,
} = require("../controllers/DepartmentController");

router.route("/").get(getAllDepartments).post(createDepartment);

module.exports = router;
