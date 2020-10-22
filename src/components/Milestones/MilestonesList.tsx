import React, { useState } from "react";
import { 
    Filter, 
    ReferenceInput, 
    SelectInput, 
    List, 
    Datagrid, 
    TextField, 
    TextInput,
    useGetList,
    useListContext,
} from 'react-admin';
import { Typography } from '@material-ui/core';
import { useMediaQuery, Divider, Tabs, Tab } from '@material-ui/core';

import { MilestonesWrapper } from './Milestones.style';

const MilestonesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const tabs = [
    { id: 'all', name: 'all' },
    { id: 'open', name: 'open' },
    { id: 'completed', name: 'completed' },
    { id: 'expired', name: 'expired' },
];


export const TableList = props => {
    const [value, setValue] = useState(0);

    const changeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
    <MilestonesWrapper>
        <Tabs
            variant="fullWidth"
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={changeTab}
            aria-label="disabled tabs example"
        >
            {tabs.map(choice => (
                <Tab key={choice.id} value={choice.id} label={choice.name}/> 
            ))}
        </Tabs>
        <Divider />
        <Datagrid rowClick="edit">
            <TextField source="board" />
            <TextField source="educator" />
            <TextField source="title" />
            <TextField source="status" />
        </Datagrid>
    </MilestonesWrapper>
    )
};

export const MilestonesList = props => (
    <>
    <Typography
        variant="h4"
        component="h1"
        align="center"
        className="title"
    >
    My Tasks
    </Typography>
    <List filters={<MilestonesFilter />} title=' ' {...props}>
        <TableList />
    </List>
    </>
)