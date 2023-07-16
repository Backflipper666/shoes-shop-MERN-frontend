//AdminShoeList.tsx
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const AdminShoeList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="brand" />
      </Datagrid>
    </List>
  );
};

export default AdminShoeList;
