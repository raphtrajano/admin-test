import styled from 'styled-components/macro';

const LudumHelpWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: end;
    margin-bottom: 50px;
    .title {
        width: 100%;
        margin: 32px 0 0 0;
        font-weight: bold;
    }
    .list-wrapper {
        width: 100%;
    }
    .MuiTable-root {
        background-color: #ffffff;
    }
    .MuiInputBase-formControl {
        border: 1px solid black;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
`;

export { LudumHelpWrapper };