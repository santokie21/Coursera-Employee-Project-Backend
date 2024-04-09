const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const employeeRouter = require("./routes/EmployeeRouter");
const departmentRouter = require("./routes/DepartmentRouter");

dotenv.config();
const app = express();
connectDB();

const PORT = process.env.PORT || 3000;
const employeeUrl = process.env.EMPLOYEE_URL || "/api/employees";
const departmentUrl = process.env.DEPARTMEnT_URL || "/api/departments";

app.use(express.json());
app.use(employeeUrl, employeeRouter);
app.use(departmentUrl, departmentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
