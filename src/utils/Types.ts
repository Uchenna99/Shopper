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