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
    .list-wrapper {
        width: 100%;
    }
    .MuiTable-root {
        background-color: #ffffff;
    }
`;

export { LudumHelpWrapper };