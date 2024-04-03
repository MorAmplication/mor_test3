import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
  orders?: InputJsonValue;
};
