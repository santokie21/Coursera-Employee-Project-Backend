//@desc Get all Employees
//@route GET /api/employees
//@access Public
const getAllEmployee = (req, res) => {
  res.status(200).json({ message: "Get All Employees" });
};

//@desc Get Employees with ID
//@route GET /api/employees/:id
//@access Public
const getEmployeeById = (req, res) => {
  res.status(200).json({ message: `Get Employee by ID : ${req.params.id}` });
};

//@desc create Employee
//@route POST /api/employees
//@access Public
const createEmployee = (req, res) => {
  res.status(200).json({ message: "Create Employee" });
};

//@desc Update Employee
//@route PUT /api/employees/:id
//@access Public
const updateEmployee = (req, res) => {
  res
    .status(200)
    .json({ message: `Update Employee with ID : ${req.params.id}` });
};

//@desc Delete Employee
//@route DELETE /api/employees/:id
//@access Public
const deleteEmployee = (req, res) => {
  res.status(200).json({ message: `Delete Employee with id ${req.params.id}` });
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
