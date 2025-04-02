import { NextResponse } from 'next/server';
import { generateOrderNumber } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here in a real app we would save the order to a database
    // For now, we just generate an order number and return it
    
    const orderNumber = generateOrderNumber();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Order placed successfully', 
      orderNumber 
    });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process order' },
      { status: 500 }
    );
  }
}