export type OrderCreateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  customerId?: string | null;
  productId?: string | null;
};
