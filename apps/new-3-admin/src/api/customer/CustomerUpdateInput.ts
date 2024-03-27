import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
};
