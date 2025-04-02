import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useCartStore } from '@/store/cartStore';
import { CheckoutFormData } from '@/types';
import { formatCurrency, generateOrderNumber } from '@/lib/utils';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

const checkoutSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  address: z.string().min(5, { message: 'Please enter your full address' }),
  deliveryMethod: z.enum(['delivery', 'pickup'])
});

export default function CheckoutModal() {
  const { 
    checkoutModalOpen, 
    closeCheckoutModal, 
    items,
    getSubtotal,
    getTax,
    getTotal,
    openConfirmationModal,
    setCheckoutData
  } = useCartStore();
  
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      deliveryMethod: 'delivery'
    }
  });
  
  const onSubmit = (data: CheckoutFormData) => {
    // Store checkout data
    setCheckoutData(data);
    
    // Generate order number and show confirmation
    const orderNumber = generateOrderNumber();
    openConfirmationModal(orderNumber);
  };
  
  if (!checkoutModalOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-lg mx-4 fade-in">
        <div className="p-4 bg-primary text-white rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">Complete Your Order</h2>
          <button 
            onClick={closeCheckoutModal}
            className="text-white focus:outline-none"
            aria-label="Close checkout"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="deliveryMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <label htmlFor="delivery">Delivery</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <label htmlFor="pickup">Pickup</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="bg-neutral-light p-4 rounded mb-6">
                <h3 className="font-medium mb-3">Order Summary</h3>
                <div className="space-y-2 mb-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span>{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{formatCurrency(getSubtotal())}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>{formatCurrency(getTax())}</span>
                  </div>
                  <div className="flex justify-between font-medium mt-1">
                    <span>Total</span>
                    <span>{formatCurrency(getTotal())}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-amber-600 text-white py-3"
              >
                Place Order
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
