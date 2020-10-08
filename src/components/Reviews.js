import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const ReviewList = props => (
    <List title=' ' {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="author" />
            <TextField source="body" />
        </Datagrid>
    </List>
);