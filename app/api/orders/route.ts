import { NextResponse } from 'next/server';
import { generateOrderNumber } from '@/lib/utils';
import { CheckoutFormData } from '@/types';

// In a real app, this would be a database
const orders: any[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { cart, checkoutData } = data;
    
    // Validate the incoming data
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { error: 'Invalid cart data' },
        { status: 400 }
      );
    }
    
    if (!checkoutData) {
      return NextResponse.json(
        { error: 'Missing checkout data' },
        { status: 400 }
      );
    }
    
    // Generate order number
    const orderNumber = generateOrderNumber();
    
    // Create order object
    const order = {
      id: orderNumber,
      items: cart,
      customer: checkoutData as CheckoutFormData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    
    // Save order (in memory for this example)
    orders.push(order);
    
    // Return order confirmation with order number
    return NextResponse.json({ 
      success: true,
      orderNumber,
      message: 'Order placed successfully' 
    });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    );
  }
}