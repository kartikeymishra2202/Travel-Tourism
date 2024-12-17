"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.status(200).json({
        message: "All users fetched successfully",
    });
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        message: "User created successfully",
        user: { name, email },
    });
};
exports.createUser = createUser;
