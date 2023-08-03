import { styled } from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Admin = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    padding: 5.6rem 2.8rem 2.4rem;

    > a {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        margin-right: 1.6rem;
        display: flex;
        align-items: center;

        svg {
            width: 3.2rem;
            height: 3.2rem;
        }
    }

    > div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        padding: 0 6.3rem;

        img {
            width: 2.45rem;
            height: 2.45rem;
        }

        p {
            font-weight: bold;
            font-size: 2.1rem;

            white-space: nowrap;
        }

        span {
            font-size: 1.2rem;
    
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    padding: 5.6rem 2.8rem 2.4rem;

    > a {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        display: flex;
        align-items: center;

        svg {
            width: 3.2rem;
            height: 3.2rem;
        }
    }

    > div {
        display: flex;
        align-items: center;
        margin: 0 1.6rem;

        img {
            width: 2.45rem;
            height: 2.45rem;
        }

        p {
            margin: 0 0.8rem;

            font-weight: bold;
            font-size: 2.1rem;

            white-space: nowrap;
        }
    }

    > label {
        display: inline-block;
        position: relative;

        a {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            display: flex;
            align-items: center;

            svg {
                width: 3.2rem;
                height: 3.2rem;
            }
        }

        p {
            width: 2rem;
            height: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: -0.4rem;
            left: 1.8rem;

            border-radius: 50%;

            background: ${({ theme }) => theme.COLORS.TOMATO_100};

            font-size: 1.4rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
        }
    }
`;