export interface Book {
  id: string;
  title: string;
  authors: string[];
  translators: string[];
  publications: string;
  category: string;
  subCategory: string;
  image: string;
  rate: number;
  numberOfComments: number;
  price: number;
  quantity: number;
  introduction: string;
  sample: string;
  comments?: Comment[];
}

export interface BookInCart {
  id: string;
  title: string;
  image: string;
  price: number;
  number?: number;
}

export interface BookSummary {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Banner {
  id: string;
  src: string;
  category: string;
}

export interface Comment {
  userName: string;
  rate: number;
  text: string;
}

export interface Order {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  totalPrice: number;
  orderDate: string;
  deliveryDate: string;
  books: { title: string; price: number; quantity: number }[];
}

export interface Cart {
  addedBooks: BookInCart[];
  subTotal: number;
  discountCode: string;
  discountPercentage: number;
  discount: number;
  total: number;
}

export type RequestMode = "idle" | "pending" | "success" | "rejected";

export type SortationMode = "highestRate" | "highestPrice" | "lowestPrice";
