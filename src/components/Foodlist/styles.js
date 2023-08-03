import { styled } from "styled-components";

export const Container = styled.li`
    width: 21rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.8rem;

    margin-right: 1.6rem;
    list-style: none;

    text-align: center;
`;

//User

export const User = styled.div`
    > img {
        margin: -1.4rem 6.1rem 1.2rem;
    }

    > button:first-child {
        display: flex;
        align-items: center;

        margin: 1.6rem 1.6rem 0 17rem;

        background: none;
        border: none;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            width: 2.4rem;
            height: 2.2rem;
        }
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin: 0 2.4rem 1.2rem;

        svg {
            display: block;
            width: 1.4rem;
            height: 1.4rem;
        }
    }

    > span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 1.2rem auto 1.6rem;

        gap: 1.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        button {
            display: flex;
            align-items: center;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            background: none;
            border: none;
        }
    }

    > button:last-child {
        height: 3.2rem;
        width: 16.2rem;

        margin: 0 2.4rem 2.4rem;
        padding: 1.2rem 2.4rem;
    }
`;

//Admin

export const Admin = styled.div`
    > img {
        margin: 3rem 6.1rem 1.2rem;
    }

    > button:first-child {
        display: flex;
        align-items: center;

        margin: 1.6rem 1.6rem 0 17rem;

        background: none;
        border: none;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    > div {
        margin-bottom: 7rem;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.2rem;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            margin: 0 2.4rem 1.2rem;

            svg {
                display: block;
                width: 1.4rem;
                height: 1.4rem;
            }
        }

        span {
            margin-bottom: 7rem;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }
`;