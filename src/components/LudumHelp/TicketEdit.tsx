import React from 'react';
import { EditButton, ListBase, useQuery, useListContext } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@material-ui/core';

import { Text } from '../Text';
import { Aside } from '../AsideFilter';

import { 
    TicketEditWrapper, 
    TitleWrapper, 
    TicketDetailsWrapper 
} from './TicketEdit.style'

export const TicketDetails =  ticket  => {
    const { data, loading, error } = useQuery({ 
        type: 'getOne',
        resource: 'help',
        payload: { id: ticket.id }
    });
    console.log(data);
    return (
        <TicketEditWrapper>
            {!loading && (
            <>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className="case-title"
                >
                    Case ID {data.id}
                </Typography>
                <Aside alignCenter/>

                <Card className="ticket-details">
                    <TitleWrapper>
                        <Typography
                        variant="h5"
                        component="h5"
                        >
                            Details
                        </Typography>
                    </TitleWrapper>
                    <TicketDetailsWrapper>
                        <CardContent className="details-1">
                            <Text className="topic" content="Subject"/>
                            <Text content={data.title}/>
                            <Text className="topic" content="Description"/>
                            <Text content={data.description}/>
                            <Text className="topic" content="CaseId"/>
                            <Text content={data.id}/>
                            <Text className="topic" content="Created at"/>
                            <Text content={data.created_at}/>
                            <Text className="topic" content="Case type"/>
                            <Text content={data.type}/>
                        </CardContent>
                        <CardContent className="details-2">
                            <Text className="topic" content="Status"/>
                            <Text content={data.status}/>
                            <Text className="topic" content="Updated at"/>
                            <Text content={data.updated_at}/>
                            <Text className="topic" content="Additional information"/>
                            <Text content={data.additional_information ? data.additional_information : '-'}/>
                        </CardContent>
                    </TicketDetailsWrapper>
                </Card>
            </>
            )}
        </TicketEditWrapper>
    );
};

export const TicketEdit = props => (
    <ListBase
    {...props}
    title=' '
    sort={{ field: 'name', order: 'ASC' }}
    perPage={20}
    pagination={false}
    actions={false}
    component="div"
    >
        <>
        <Box display="flex" margin="5px">
        <TicketDetails {...props}/>
        </Box>
        </>
    </ListBase>
)