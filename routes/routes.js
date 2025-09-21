import express from 'express';
import { createToDoList, getToDoList } from '../handlers/todoController.js';
import { getAuthToken } from '../handlers/authorizationToken.js';

const router = express.Router();

router.post("/sf-auth", getAuthToken);
router.post("/create-todo", createToDoList);
router.get("/get-todo", getToDoList);

export default router;