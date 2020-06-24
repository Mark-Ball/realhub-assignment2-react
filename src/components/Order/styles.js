import styled from 'styled-components';

export const OrderContainer = styled.div`
    margin: 20px;
    width: 600px;
    border: 1px solid grey;
`;

export const TopContainer = styled.div`
    width: 100%;
    border: 1px solid grey;

    p {
        margin: 10px;
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;

    p {
        margin: 10px;

        span:nth-child(1), span:nth-child(2) {
            cursor: pointer;

            :hover {
                text-decoration: underline;
            }
        }

        span:nth-child(3) {
            color: ${props => props.status === 'Approved' ? 'green' : 'grey'};
            font-weight: bold;
        }
    }

    div {
        display: flex;
    }
`;