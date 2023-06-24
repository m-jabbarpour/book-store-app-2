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

export interface Order {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  totalPrice: number;
  orderDate: string;
  deliveryDate: string;
  books: { title: string; price: number; quantit: number }[];
}

export type RequestMode = "idle" | "pending" | "success" | "rejected";

export type SortationMode = "highestRate" | "highestPrice" | "lowestPrice";
