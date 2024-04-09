const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this department"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this department"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", DepartmentSchema);
