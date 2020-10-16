import { createMuiTheme } from '@material-ui/core/styles';

export const LudumTheme = createMuiTheme({

    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                color: 'black', // Some CSS
            },
        },
        MuiAppBar: {
            colorSecondary: {
                backgroundColor: 'white',
                color: 'black',
            }
        },
        MuiDrawer: {
            paperAnchorLeft: {
                background: 'linear-gradient(90deg, rgba(16,69,116,1) 0%, rgba(0,145,255,1) 100%);',
            }
        },
        RaMenuItemLink: {
            root: {
                color: '#ffffff',
            },
            active: {
                color: '#ffffff',
                fontWeight: 'bold',
                background: '#2165a0',
            },
        },
        MuiListItemIcon: {
            root: {
                color: '#ffffff',
            }
        }
    },
});