import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
  orders?: InputJsonValue;
};
