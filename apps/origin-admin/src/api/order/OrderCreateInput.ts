import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  productId?: string | null;
};
