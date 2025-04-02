import { NextResponse } from 'next/server';

// In a real app, this would connect to a database
const messages: any[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create contact message object
    const contactMessage = {
      id: Date.now().toString(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };
    
    // In a real app, we would save to database or send email
    messages.push(contactMessage);
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Message received! We\'ll be in touch soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}