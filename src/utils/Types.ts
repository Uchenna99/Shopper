export interface DB_User {
  id:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: 'CUSTOMER' | 'ADMIN';
  addresses: any[];
  cart: Cart;
  orders: any[];
  reviews: any[];
  wishlist: any[];
  createdAt: Date;
  updatedAt: Date;
}


export interface DecodedToken {
    exp: number;
    iat: number;
    id: string; 
    name: string; 
    email: string;
    role: string;
};


export interface CartItem {
    name: string; 
    description: string; 
    price: number;
    rating: number;
    category: 'men' | 'women' | 'children' | 'bags' | 'shoes' | 'accessories';
    colors:  string[];
    image: string;
    quantity: number;
};


export interface Cart {
  id: string;
  user: any;
  userId: string;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}