import styled from 'styled-components/macro';

const ProfileEditWrapper = styled.div`
    .title {
        font-weight: bold;
    }
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
    flex-wrap: wrap;
    .MuiCardContent-root {
        padding: 4px;
        margin: 0 15px;
    }
    .MuiCardActions-spacing {
        display: flex;
        padding: 8px;
        width: 100%;
        background-color: rgba(75, 175, 255, 0.8);
        align-items: center;
        margin-top: 15px;
        padding: 0;
    }
    .my-profile {
        width: 100%;
        margin-top: 32px;
        font-weight: bold;
    }
    .card {
        width: 80%;
        display: flex;
        margin: auto;
        margin-top: 40px;
        justify-content: center;
        flex-wrap: wrap;
        border: 0.5px solid #000000;
        border-radius: 15px;
        box-shadow: 0 0 25px rgba(75,175,255,0.8);
    }
    .field {
        font-size: 1.5em;
        margin: 0;
        margin-right: 20px;
    }
    .full-width {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: initial;   
    }
    .edit-btn {
        width: 100%;
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        /* margin: 10px; */
        padding: 10px;
        background: linear-gradient(90deg, rgba(33,101,160,1) 0%, rgba(0,118,214,1) 100%);
        /* padding: 0; */
        height: auto;
        flex: 1;
        border-radius: 0;
        svg {
            color: #000000;
            font-size: 25px;
        }
    }
`;

export { ProfileEditWrapper, ProfileWrapper };