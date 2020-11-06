import styled from 'styled-components/macro';

const TicketEditWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin: 5px;
    .case-title {
        width: 100%;
        margin: 32px 0;
        font-weight: bold;
    }
    .ticket-details {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
    }
    .details-1 {
        width: 50%;
        border-right: 1px solid rgba(0,0,0,0.3);
    }
    .details-2 {
        width: 50%;
    }
    .topic {
        :first-child {
            margin: 0 0 5px 0;
        }
        font-weight: bold;
        font-size: 18px;
        margin: 20px 0 5px 0;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    justify-content: flex-start;
    padding: 10px 16px;
    background-color: rgba(0,145,255,0.5);
    h5 {
        font-weight: bold;
    }
`;

const TicketDetailsWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    text-align: initial;
    margin: 10px 0;
`;

export { TicketEditWrapper, TitleWrapper, TicketDetailsWrapper }
