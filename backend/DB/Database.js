import mongoose from "mongoose";

export const connectDB = async () => {
  const db = "mongodb://localhost:27017/Expense_Tracker"; // Directly hardcoded

  try {
    const { connection } = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected to ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process if cannot connect
  }
};
