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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = exports.updateLoanStatus = exports.getAllLoans = exports.applyForLoan = void 0;
const Loan_1 = require("../models/Loan");
const applyForLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = new Loan_1.Loan(req.body);
        yield loan.save();
        res.status(201).json({ message: "Application submitted successfully." });
    }
    catch (error) {
        res.status(500).json({ error: "Error processing application." });
    }
});
exports.applyForLoan = applyForLoan;
// 📌 Get all loan applications (for dashboard)
const getAllLoans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield Loan_1.Loan.find();
        res.json(loans);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching loans." });
    }
});
exports.getAllLoans = getAllLoans;
// 📌 Update loan status (Verifier/Admin)
const updateLoanStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Loan_1.Loan.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Loan status updated successfully." });
    }
    catch (error) {
        res.status(500).json({ error: "Error updating loan status." });
    }
});
exports.updateLoanStatus = updateLoanStatus;
// 📌 Fetch Dashboard Statistics
const getDashboardStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Your logic here
        res.json({ message: "Dashboard stats fetched successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.getDashboardStats = getDashboardStats;
