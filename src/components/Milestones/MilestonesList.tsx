import React, { useState, useEffect, useCallback } from "react";
import { 
    Filter, 
    ReferenceInput, 
    SelectInput, 
    Identifier,
    List, 
    Datagrid, 
    TextField, 
    TextInput,
    ListContextProvider,
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

const useGetTotals = (filterValues: any) => {
    console.log('useGetTotals , filterValues', filterValues);
    const { total: totalOpen } = useGetList(
        'milestones',
        { perPage: 1, page: 1 },
        { field: 'board', order: 'ASC' },
        { ...filterValues, status: 'open' }
    );
    const { total: totalCompleted } = useGetList(
        'milestones',
        { perPage: 1, page: 1 },
        { field: 'board', order: 'ASC' },
        { ...filterValues, status: 'completed' }
    );
    const { total: totalExpired } = useGetList(
        'milestones',
        { perPage: 1, page: 1 },
        { field: 'board', order: 'ASC' },
        { ...filterValues, status: 'expired' }
    );

    return {
        open: totalOpen,
        completed: totalCompleted,
        expired: totalExpired,
    };
};

export const TableList = props => {
    const listContext = useListContext();
    const { ids, data, filterValues, setFilters, displayedFilters } = listContext;
    console.log('filterValues',filterValues);
    const [open, setOpen] = useState<Identifier[]>([] as Identifier[]);
    const [completed, setCompleted] = useState<Identifier[]>(
        [] as Identifier[]
    );
    const [expired, setExpired] = useState<Identifier[]>(
        [] as Identifier[]
    );
    const totals = useGetTotals(filterValues) as any;

    useEffect(() => {
        if (ids && ids !== filterValues.status) {
            console.log('ids',ids);
            switch (filterValues.status) {
                case 'open':
                    setOpen(ids);
                    break;
                case 'completed':
                    setCompleted(ids);
                    break;
                case 'expired':
                    setExpired(ids);
                    break;
                default:

            }
        }
    }, [ids, filterValues.status]);

    const [value, setValue] = useState('all');

    const handleChange = useCallback(
        (event: React.ChangeEvent<{}>, value: any) => {
            setFilters &&
                setFilters(
                    { ...filterValues, status: value },
                    displayedFilters
                );
            setValue(value);
        },
        [displayedFilters, filterValues, setFilters]
    );

    const selectedIds =
        filterValues.status === 'open'
            ? open
            : filterValues.status === 'completed'
            ? completed
            : expired;
    console.log('selectedIds',selectedIds);
    return (
    <MilestonesWrapper>
        <Tabs
            variant="fullWidth"
            value={filterValues.status}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            {tabs.map(choice => (
                    <Tab
                        key={choice.id}
                        label={
                            totals[choice.name]
                                ? `${choice.name} (${totals[choice.name]})`
                                : choice.name
                        }
                        value={choice.id}
                    />
                ))}
        </Tabs>
        <Divider />
        {filterValues.status === 'open' && (
                        <ListContextProvider
                            value={{ ...listContext, ids: open }}
                        >
                            <Datagrid {...props} optimized rowClick="edit">
                                <TextField source="board" />
                                <TextField source="educator" />
                                <TextField source="title" />
                                <TextField source="status" />
                            </Datagrid>
                        </ListContextProvider>
                    )}
                    {filterValues.status === 'completed' && (
                        <ListContextProvider
                            value={{ ...listContext, ids: completed }}
                        >
                            <Datagrid {...props} rowClick="edit">
                                <TextField source="board" />
                                <TextField source="educator" />
                                <TextField source="title" />
                                <TextField source="status" />
                            </Datagrid>
                        </ListContextProvider>
                    )}
                    {filterValues.status === 'expired' && (
                        <ListContextProvider
                            value={{ ...listContext, ids: expired }}
                        >
                            <Datagrid {...props} rowClick="edit">
                                <TextField source="board" />
                                <TextField source="educator" />
                                <TextField source="title" />
                                <TextField source="status" />
                            </Datagrid>
                        </ListContextProvider>
                    )}
        {filterValues.status === 'all' && (
                        <ListContextProvider
                            value={{ ...listContext }}
                        >
                            <Datagrid {...props} optimized rowClick="edit">
                                <TextField source="board" />
                                <TextField source="educator" />
                                <TextField source="title" />
                                <TextField source="status" />
                            </Datagrid>
                        </ListContextProvider>
                    )}
                    {/* ACERTAR ISSO */}
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