import React,{ useState } from "react";
import { 
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  useListContext, 
  List,
  Datagrid,
  TextField,
} from 'react-admin';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Typography, Card, CardContent } from "@material-ui/core";
import Zendesk from "react-zendesk";
import { ZendeskAPI } from "react-zendesk";

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

const Aside = () => {
    const [contact, setContact] = useState(false);

    return (
        <Card className="filter-box">
            <CardContent className="filter-content"> 
                <FilterList
                    label="Cases"
                    icon={<LibraryBooksIcon />}
                >
                    <FilterListItem
                        label="New"
                        value={{
                            sales_lte: undefined,
                            sales_gt: 25,
                            sales: undefined,
                        }}
                    />
                    <FilterListItem
                        label="Open"
                        value={{
                            sales_lte: 25,
                            sales_gt: 10,
                            sales: undefined,
                        }}
                    />
                    <FilterListItem
                        label="Closed"
                        value={{
                            sales_lte: 10,
                            sales_gt: 0,
                            sales: undefined,
                        }}
                    />
                </FilterList>

                <FilterList
                    label="Contact Us"
                    icon={<ContactMailIcon />}
                >
                  <FilterListItem
                        label="Send us a message"
                        value={{
                          sales_lte: 10,
                          sales_gt: 0,
                          sales: undefined,
                      }}
                    />
                </FilterList>

                <FilterList
                    label="Help Center"
                    icon={<HeadsetMicIcon />}
                >
                </FilterList>
            </CardContent>
        </Card>
    );
};

export const LudumHelp = props => {
    
    return (
    <LudumHelpWrapper>
      <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
      <Typography variant="h4" component="h1" align="center" className="title">
        Help Support
      </Typography>
      <List 
      {...props}
      title=' '
      sort={{ field: 'name', order: 'ASC' }}
      perPage={20}
      pagination={false}
      component="div"
      actions={false}
      >
        <>
        <Aside/>
        {/* <Datagrid>
            <TextField source="new" />
            <TextField source="open" />
            <TextField source="closed" />
        </Datagrid> */}
        </>
      </List>
    </LudumHelpWrapper>
    );

};