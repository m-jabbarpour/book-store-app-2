import { orders } from "../../../database/orders";

export default function handler(req, res) {
  res.status(200).json(orders);
}
