import { Order } from "../order/Order";
import { Address } from "../address/Address";

export type Customer = {
  email: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  orders?: Array<Order>;
  address?: Address | null;
};
