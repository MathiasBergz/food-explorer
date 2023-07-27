import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 42.8rem;
    max-height: 100vh;
    margin: 0 auto;

    > header {
        display: flex;
        align-items: self-start;
        margin: 15.8rem 5.6rem 7.3rem;

        gap: 1.1rem;

        > img {
            width: 4.4rem;
            height: 4.4rem;
            border-radius: 50%;
        }

        h1 {
            font-size: 3.7rem;
            font-weight: bold;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            white-space: nowrap;
        }
    }

    @media (min-width: 43rem) {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > header {
            display: flex;
            align-items: center;

            gap: 1.9rem;

            margin: auto 15.4rem;

            h1 {
            font-size: 4.2rem;
            font-weight: bold;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            white-space: nowrap;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: self-start;
    justify-content: center;
    flex-direction: column;

    margin: 0 5.6rem;

    > h2 {
        display: none;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-bottom: 0.8rem;
    }

    > a {
        align-self: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
    }

    @media (min-width: 43rem) {
        width: 47.6rem;
        padding: 6.4rem;
        margin: 14.2rem 10.8rem;

        border-radius: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        > h2 {
            font-size: 3.2rem;
            font-weight: 500;
            font-family: 'Poppins',sans-serif;

            display: block;
            align-self: center;

            margin-bottom: 3.2rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            margin-bottom: 0.8rem;
        }

        > a {
            align-self: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.4rem;
        }
    }
`;