import { NextResponse } from 'next/server';
import { connectToDatabase, Student } from '../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    await connectToDatabase();
    
    
    const newStudent = new Student({ email });
    await newStudent.save();
    
    return NextResponse.json({ message: 'data saved successfully!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error: data not saved' }, { status: 500 });
  }
}
