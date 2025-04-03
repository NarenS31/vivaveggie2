export interface MenuItem {
  id: string;
  name: string;
  description: string;
  text?: string;
  price: number;
  location?: string;
  image: string;
  category: "appetizers" | "salads" | "mains" | "bowls" | "desserts" | "drinks";
  featured?: boolean;
  tags?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type CartItemType = CartItem;

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  comment: string;
  title: string;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  deliveryMethod: "delivery" | "pickup";
}
