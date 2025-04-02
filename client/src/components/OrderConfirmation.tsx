import { CheckCircle } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';

export default function OrderConfirmation() {
  const { confirmationModalOpen, orderNumber, closeConfirmationModal } = useCartStore();
  
  if (!confirmationModalOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 p-6 text-center fade-in">
        <div className="mb-4">
          <CheckCircle className="h-12 w-12 text-primary mx-auto" />
        </div>
        <h2 className="text-2xl font-display font-bold mb-2">Thank You!</h2>
        <p className="text-lg mb-4">Your order has been successfully placed!</p>
        <p className="mb-6">
          Order #{orderNumber} is being prepared. You will receive a confirmation email shortly.
        </p>
        <Button 
          onClick={closeConfirmationModal}
          className="w-full bg-primary hover:bg-green-600 text-white"
        >
          Back to Menu
        </Button>
      </div>
    </div>
  );
}
