import React from 'react';
import { EditButton, ListBase, useQuery, useListContext } from 'react-admin';
import { Card, CardContent } from '@material-ui/core';

export const TicketDetails =  userId  => {
    const { data, loading, error } = useQuery({ 
        type: 'getOne',
        resource: 'help',
        payload: { id: userId.id }
    });
    console.log(data);
    return (
        <Card>
            <h1>Test</h1>
            <CardContent>
                <h1>Test 2</h1>
            </CardContent>
        </Card>
    );
};

export const TicketEdit = props => (
    <ListBase
    {...props}
    title=' '
    sort={{ field: 'name', order: 'ASC' }}
    perPage={20}
    pagination={false}
    component="div"
    actions={false}
    >
        <TicketDetails {...props}/>
    </ListBase>
)