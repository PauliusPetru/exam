import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./config/db.js";
import {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "./controllers/client.controller.js";

import { clientExist } from "./middlewares/error.js";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectMongoDB();

// Middilewares
app.use(express.json());
// Routes

app.get("/api/clients", getClients);

app.get("/api/posts/:id", clientExist, getClient);

app.post("/api/clients", createClient);

app.put("/api/posts/:id", clientExist, updateClient);

app.delete("/api/posts/:id", clientExist, deleteClient);

// Starting server
app.listen(PORT, () => console.log("Server is running on PORT:" + PORT));
