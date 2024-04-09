//@desc Get all Departments
//@route GET /api/departments
//@access Public
const getAllDepartments = (req, res) => {
  res.send({ message: "Get all Departments" });
};

//@desc Create Department
//@route POST /api/departments
//@access Public
const createDepartment = (req, res) => {
  res.send({ message: "Create Department" });
};

module.exports = { getAllDepartments, createDepartment };
