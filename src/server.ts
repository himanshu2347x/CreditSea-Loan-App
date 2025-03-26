import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import loanRoutes from "./routes/loanRoutes";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/loans", loanRoutes);


app.get("/", (_req, res) => {
  res.send("CreditSea Loan Manager API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
