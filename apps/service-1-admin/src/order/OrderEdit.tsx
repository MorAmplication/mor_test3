import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Discount" source="discount" />
        <NumberInput step={1} label="TotalPrice" source="totalPrice" />
        <TextInput label="CustomerId" source="customerId" />
        <TextInput label="ProductId" source="productId" />
      </SimpleForm>
    </Edit>
  );
};
