import express from "express";
import { 
  applyForLoan, 
  getAllLoans, 
  updateLoanStatus, 
} from "../controllers/loanController";

const router = express.Router();

router.post("/apply", applyForLoan);
router.get("/", getAllLoans);
router.put("/:id", updateLoanStatus);
export default router;
