import styled from 'styled-components';

export const OrderContainer = styled.div`
    margin: 40px auto;
    width: 800px;
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
    }

    div {
        display: flex;

        span {
            cursor: pointer;
            margin: 10px;

            :hover {
                text-decoration: underline;
            }
        }
    }
`;