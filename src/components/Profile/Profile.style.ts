import styled from 'styled-components/macro';

const ProfileEditWrapper = styled.div`
    .save-btn {
        display: flex;
        width: auto;
        margin: auto;
    }
    .MuiButton-contained.Mui-disabled {
        color: rgba(0, 0, 0, 0.26);
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.12);
    }
    .MuiButton-containedPrimary {
        background-color: #0000ff;
    }
`;

const ProfileWrapper = styled.div`
    width: 80%;
    display: flex;
    margin: auto;
    .card {
        width: 80%;
        display: flex;
        margin: auto;
        margin-top: 40px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .full-width {
        width: 100%;
    }
    .MuiCardContent-root {
        padding: 4px;
    }
`;

export { ProfileEditWrapper, ProfileWrapper };