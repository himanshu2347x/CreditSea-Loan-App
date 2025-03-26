import { Request, Response } from "express";
import { Loan } from "../models/Loan";

export const applyForLoan = async (req: Request, res: Response) => {
  try {
    const loan = new Loan(req.body);
    console.log(req.body);
    await loan.save();
    res.status(201).json({ message: "Application submitted successfully." });
  } catch (error) {
    console.log("error is", error);
    res.status(500).json({ error: "Error processing application." });
  }
};

// 📌 Get all loan applications (for dashboard)
export const getAllLoans = async (req: Request, res: Response) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: "Error fetching loans." });
  }
};

// 📌 Update loan status (Verifier/Admin)
export const updateLoanStatus = async (req: Request, res: Response) => {
  try {
    await Loan.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Loan status updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error updating loan status." });
  }
};


