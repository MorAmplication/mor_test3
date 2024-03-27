import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  address?: AddressWhereUniqueInput;
};
