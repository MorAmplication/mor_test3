import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="CreatedAt" />
        <DateField source="updatedAt" label="UpdatedAt" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Discount" source="discount" />
        <TextField label="TotalPrice" source="totalPrice" />
        <TextField label="CustomerId" source="customerId" />
        <TextField label="ProductId" source="productId" />
      </Datagrid>
    </List>
  );
};
