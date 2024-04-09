const express = require("express");
const {
  getAllEmployee,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/EmployeeController");
const router = express.Router();

router.route("/").get(getAllEmployee).post(createEmployee);

router
  .route("/:id")
  .get(getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
