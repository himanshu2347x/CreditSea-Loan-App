"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
dotenv_1.default.config();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const userExists = yield User_1.default.findOne({ email });
        if (userExists) {
            res.status(400).json({ message: "User already exists" });
            return; // Ensure the function exits after sending a response
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield User_1.default.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully", userId: user._id });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return; // Ensure the function exits after sending a response
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials" });
            return; // Ensure the function exits after sending a response
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true });
        res.json({ message: "Login successful", token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.loginUser = loginUser;
