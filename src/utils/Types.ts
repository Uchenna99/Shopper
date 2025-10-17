export interface DB_User {
  id:string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'CUSTOMER' | 'ADMIN';
  addresses: any[];
  cart: Cart;
  orders: DB_Order[];
  reviews: any[];
  wishlist: Wishlist;
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


export interface DB_CartItem {
  id?:string;
  name: string;
  price: number;
  rating: number;
  category?: any;
  categoryName: 'men' | 'women' | 'children' | 'bags' | 'shoes' | 'accessories';
  order?: any;
  orderId?: string;
  color: string;
  image: string;
  quantity: number;
  cart?: any;
  cartId: string;
};

export interface Cart {
  id: string;
  user: any;
  userId: string;
  items: DB_CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DB_Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  rating: number;
  images: string[];
  colors: string[];
  brand?: string;
  categoryName: 'men' | 'women' | 'children' | 'bags' | 'shoes' | 'accessories';
  category?: any;
  size?: string;
  stock: number;
  reviews?: any;
  createdAt: Date;
  updatedAt: Date;
}


export interface LoginData {
    accessToken: string;
    user: DB_User;
}

export interface RemoveItemDTO { 
  cartId?: string; 
  itemId?: string; 
  itemName: string 
}

export interface DB_Order {
  id: string;
  userId: string;
  totalAmount: number;
  totalItems: number;
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  addressId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Wishlist {
  id: string;
  user: DB_User;
  userId: string;
  items: WishlistItem[];
  createdAt: Date;
}

export interface WishlistItem {
  id: string;
  wishlist: Wishlist;
  wishlistId: string;
  name: string;
  price: number;
  image: string;
  productId: string;
  createdAt: Date;
}