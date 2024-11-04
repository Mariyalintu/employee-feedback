import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const employeeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: uuidv4 },
  name: { type: String, required: true },
  role: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
