import styled from 'styled-components/macro';

const LudumHelpWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: end;
    .title {
        width: 100%;
        margin: 32px 0;
        font-weight: bold;
    }
    .filter-box {
        width: 230px;
        border-radius: 10px;
    }
    .filter-content {
        padding: 0 24px 16px 10px;
        border: 2px solid rgba(16,69,116,1);
        border-radius: 10px;
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

export { LudumHelpWrapper };