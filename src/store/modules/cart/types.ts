export interface IProduct {
  id: number;
  name: string;
  price: number;
  aditionals: {
    id: string;
    name: string;
    price: number;
    quantity: string;
  };
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
