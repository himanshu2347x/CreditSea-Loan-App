import mongoose, { Schema, Document } from "mongoose";

interface ILoan extends Document {
  fullName: string;
  amount: number;
  tenure: number;
  employmentStatus: string;
  reason: string;
  employmentAddress: string;
  status: "Pending" | "Approved" |"Verified"| "Rejected";
  appliedAt: Date;
}

const LoanSchema = new Schema<ILoan>({
  fullName: { type: String, required: true },
  amount: { type: Number, required: true },
  tenure: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  reason: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Approved", "Verified","Rejected"], default: "Pending" },
  appliedAt: { type: Date, default: Date.now }
});

export const Loan = mongoose.model<ILoan>("Loan", LoanSchema);
