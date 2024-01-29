import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Discount" source="discount" />
        <NumberInput step={1} label="TotalPrice" source="totalPrice" />
        <TextInput label="CustomerId" source="customerId" />
        <TextInput label="ProductId" source="productId" />
      </SimpleForm>
    </Create>
  );
};
