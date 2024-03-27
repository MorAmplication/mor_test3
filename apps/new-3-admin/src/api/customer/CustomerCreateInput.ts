import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
};
