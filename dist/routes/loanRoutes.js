"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loanController_1 = require("../controllers/loanController");
const router = express_1.default.Router();
router.post("/apply", loanController_1.applyForLoan);
router.get("/", loanController_1.getAllLoans);
router.put("/:id", loanController_1.updateLoanStatus);
router.get("/stats", loanController_1.getDashboardStats);
exports.default = router;
