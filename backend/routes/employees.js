import express from "express";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js"; // Ensure this path is correct

const router = express.Router();

// Route to create a new employee
router.post("/", createEmployee);

// Route to get all employees
router.get("/", getAllEmployees);

// Route to get an employee by ID
router.get("/:id", getEmployeeById);

// Route to update an employee
router.put("/:id", updateEmployee);

// Route to delete an employee
router.delete("/:id", deleteEmployee);

export default router;
