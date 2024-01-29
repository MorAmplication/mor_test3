import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="CreatedAt" />
        <DateField source="updatedAt" label="UpdatedAt" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Discount" source="discount" />
        <TextField label="TotalPrice" source="totalPrice" />
        <TextField label="CustomerId" source="customerId" />
        <TextField label="ProductId" source="productId" />
      </SimpleShowLayout>
    </Show>
  );
};
