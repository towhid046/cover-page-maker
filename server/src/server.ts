import dotenv from "dotenv";
import connectDB from "./config/db";
import app from "./app";
import cors from "cors";

dotenv.config();

// CORS configuration with proper typing
const corsOptions = {
  origin: [
    "http://localhost:5173", 
    "https://cover-page-maker.web.app"
  ]
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
