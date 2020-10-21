import * as React from "react";
import { Filter, ReferenceInput, SelectInput, List, Datagrid, TextField, TextInput } from 'react-admin';
import { Typography } from '@material-ui/core';

import { MilestonesWrapper } from './Milestones.style';

const MilestonesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput source="status" reference="milestones" allowEmpty>
            <SelectInput optionText="Status" />
        </ReferenceInput>
    </Filter>
);

export const MilestonesList = props => (
    <MilestonesWrapper>
        <Typography
            variant="h4"
            component="h1"
            align="center"
            className="title"
        >
        My Tasks
        </Typography>
        <List filters={<MilestonesFilter />} title=' ' {...props}>
            <Datagrid rowClick="edit">
                <TextField source="board" />
                <TextField source="educator" />
                <TextField source="title" />
            </Datagrid>
        </List>
    </MilestonesWrapper>
);