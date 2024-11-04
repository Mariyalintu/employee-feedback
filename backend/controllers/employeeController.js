import Employee from "../models/employee.model.js";
import bcrypt from "bcrypt";

// Create a new employee
export const createEmployee = async (req, res) => {
  const { name, role, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password
    const newEmployee = new Employee({
      name,
      role,
      username,
      password: hashedPassword,
    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Get all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get an employee by ID
export const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update an employee
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
