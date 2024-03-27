import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  email?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  addressId?: SortOrder;
};
