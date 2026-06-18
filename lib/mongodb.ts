import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/codingjr';

export async function connectToDatabase() {
  
  if (mongoose.connection.readyState >= 1) return;
  
  try {
    return await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

const StudentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Student = mongoose.models.Student || mongoose.model('Student', StudentSchema);
