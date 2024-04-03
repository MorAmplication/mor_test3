import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "productId";

export const OrderTitle = (record: TOrder): string => {
  return record.productId?.toString() || String(record.id);
};
