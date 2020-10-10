import * as React from "react";
import { FC } from 'react';
import { EditButton, List, ListProps, useListContext } from 'react-admin';
// import inflection from 'inflection';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: '1em',
    },
    media: {
        width: '100%',
        height: '230px',
        margin: 'auto',
    },
    title: {
        paddingBottom: '0.5em',
    },
    actionSpacer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    board: {
        border: '1px solid black',
        padding: '0!important',
        margin: '10px',
    }
});

const CategoryGrid = props => {
    const classes = useStyles(props);
    const { data, ids } = useListContext();
    console.log(data);
    return ids ? (
        <Grid container spacing={2} className={classes.root}>
            {ids.map(id => (
                <Grid className={classes.board} key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
                    <Card>
                        <CardMedia
                            image={data[id].imgURL}
                            className={classes.media}
                        />
                        <CardContent className={classes.title}>
                            <Typography
                                variant="h5"
                                component="h2"
                                align="center"
                            >
                                {/* {inflection.humanize(data[id].name)} */}
                                {data[id].title}
                            </Typography>
                        </CardContent>
                        <CardActions
                            classes={{ spacing: classes.actionSpacer }}
                        >
                            {/* <a href="/"/> */}
                            <EditButton
                                basePath="/categories"
                                record={data[id]}
                            />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    ) : null;
};

export const BoardsList = props => (
    <List
        {...props}
        title=' '
        sort={{ field: 'name', order: 'ASC' }}
        perPage={20}
        pagination={false}
        component="div"
        actions={false}
    >
        <CategoryGrid {...props}/>
    </List>
);

// export const BoardsList = props => (
//     <List title=' '{...props}>
//         <Datagrid rowClick="edit">
//             <TextField source="id" />
//             <TextField source="title" />
//         </Datagrid>
//     </List>
// );