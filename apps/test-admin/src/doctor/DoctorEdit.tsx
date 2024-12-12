import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DoctorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Full Name" source="fullName" />
      </SimpleForm>
    </Edit>
  );
};
