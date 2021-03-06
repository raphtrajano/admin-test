import React,{ useState } from "react";
import { 
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  useListContext, 
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
} from 'react-admin';
import SearchIcon from "@material-ui/icons/Search";
import { Typography, InputAdornment, Card, CardContent, Box } from "@material-ui/core";
import Zendesk from "react-zendesk";
import { ZendeskAPI } from "react-zendesk";

import { Aside } from '../AsideFilter';

import { LudumHelpWrapper } from './LudumHelp.style';

const ZENDESK_KEY = '049c6823-594c-4d1c-aafa-4d09c22ea5cd';
ZendeskAPI("webWidget", "setLocale", "de");

const setting = {
    launcher: {
      chatLabel: {
        "en-US": "Need Help"
      }
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "I'm having some trouble with ..." } },
      ],
    }
  };

  const TicketFilter = (props) => (
    <Filter {...props}>
      <TextInput className="search-input"  label="Search" source="q" 
      InputProps={{
      endAdornment: (
        <InputAdornment position="end">
            <SearchIcon />
        </InputAdornment>
      )
    }} alwaysOn />
    </Filter>
  );

export const LudumHelp = props => {
    return (
    <LudumHelpWrapper>
      <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
      <Typography variant="h4" component="h1" align="center" className="title">
        Help Support
      </Typography>
      <List 
      title=' '
      filters={<TicketFilter />}
      sort={{ field: 'name', order: 'ASC' }}
      perPage={10}
      component="div"
      className="list-wrapper"
      {...props}
      >
        <>
          <Box display="flex" margin="5px">
            <Aside />
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="type" />
                <TextField source="description" />
                <TextField source="status" />
                <TextField source="created_at" />
                <TextField source="updated_at" />
            </Datagrid>
          </Box>
        </>
      </List>
    </LudumHelpWrapper>
    );
};