import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  discount: number | null;
  totalPrice: number | null;
  customer?: Customer | null;
  productId: string | null;
};
