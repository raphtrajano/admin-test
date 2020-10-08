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
            root: {
                backgroundColor: 'rgba(42, 155, 225, 0.8)'
            }
        },
        RaMenuItemLink: {
            root: {
                color: '#000',
            },
            active: {
                fontWeight: 'bold',
                borderRight: '4px solid blue',
            },
        },
    },
});