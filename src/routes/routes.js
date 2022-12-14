const express = require('express');
const router = express.Router();
const CreateUserController = require('../controllers/CreateUserController');
const ListUserController = require('../controllers/ListUserController');
const DeleteUserController = require('../controllers/DeleteUserController');
const UpdateUserController = require('../controllers/UpdateUserController');
const LoginUserController = require('../controllers/LoginUserController');
const authMiddleware = require('../middleware/auth');

router.post("/user", authMiddleware, CreateUserController.createUser);
router.get("/user", authMiddleware, ListUserController.listUsers);
router.delete("/user/:id", authMiddleware, DeleteUserController.remove);
router.put("/user/:id", authMiddleware, UpdateUserController.updateUser);
router.post("/login", LoginUserController.login);

module.exports = router;
