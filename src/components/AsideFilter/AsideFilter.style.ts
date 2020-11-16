import styled from 'styled-components/macro';

interface Props {
    alignCenter?: boolean;
}

const AsideWrapper = styled.div<Props>`
    align-self: ${(props: Props) => props.alignCenter ? 'center' : ''};
    .filter-box {
        width: 230px;
        height: 296px;
        border-radius: 10px;
        margin-right: 10px;
    }
    .filter-content {
        padding: 0 24px 16px 10px;
        border: 2px solid rgba(16,69,116,1);
        border-radius: 10px;
        button:first-of-type {
            display: none;
        }
    }
    .MuiPaper-elevation1 {
        height: auto;
    }
    .MuiTypography-overline {
        font-weight: bold;
    }
    .MuiListItem-button:hover {
        background-color: #E8F2FF;
        border-radius: 10px;
    }
    .Mui-selected {
        background-color: #ADD2FF;
        border-radius: 10px;
    }
`;

export { AsideWrapper };