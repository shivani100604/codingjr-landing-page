import { NextResponse } from 'next/server';
import { connectToDatabase, Student } from '../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // डेटाबेस कनेक्शन
    await connectToDatabase();
    
    // नया ईमेल MongoDB में सेव करें
    const newStudent = new Student({ email });
    await newStudent.save();
    
    return NextResponse.json({ message: 'डेटाबेस (MongoDB) में सफलतापूर्वक सेव हो गया!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'सर्वर एरर: डेटा सेव नहीं हो सका।' }, { status: 500 });
  }
}
