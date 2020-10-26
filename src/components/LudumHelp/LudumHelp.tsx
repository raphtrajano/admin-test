import * as React from "react";
import { List, Datagrid, NumberField, TextField } from 'react-admin';
import { Typography } from "@material-ui/core";
import Zendesk from "react-zendesk";

import { LudumHelpWrapper } from './LudumHelp.style';

const ZENDESK_KEY = '1HGwBOcHEAoHOIysC4Ls5txgCD4yRCVQXHBR77Ff';

const setting = {
    color: {
      theme: "#000"
    },
    launcher: {
      chatLabel: {
        "en-US": "Need Help"
      }
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "My pre-filled description" } }
      ]
    }
  };

export const LudumHelp = props => {
    
    return (
    <>
        <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
            <LudumHelpWrapper>
                <Typography variant="h4" component="h1" align="center" className="title">
                    Help Support
                </Typography>
            </LudumHelpWrapper>
    </>
    );

};