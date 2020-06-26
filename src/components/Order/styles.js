import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const OrderContainer = styled.div`
    margin: 40px auto;
    width: 800px;
    border: 1px solid ${COLOURS.LIGHTGREY};
`;

export const TopContainer = styled.div`
    width: 100%;
    border: 1px solid ${COLOURS.LIGHTGREY};
    background-color: ${COLOURS.BLUE};

    p {
        margin: 10px;
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-left: 1px solid ${COLOURS.LIGHTGREY};
    border-right: 1px solid ${COLOURS.LIGHTGREY};
    border-bottom: 1px solid ${COLOURS.LIGHTGREY};

    p {
        margin: 10px;
    }

    div {
        display: flex;

        span {
            cursor: pointer;
            font-size: .75em;
            margin: auto 10px;

            :hover {
                text-decoration: underline;
            }
        }
    }
`;