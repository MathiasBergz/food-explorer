import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 42.8rem;
    max-height: 100vh;
    margin: 0 auto;
`;

export const Form = styled.form`
    margin: 15.8rem 5.6rem;

    display: flex;
    align-items: self-start;
    justify-content: center;
    flex-direction: column;

    > header {
        display: flex;
        align-items: center;
        margin-bottom: 7.3rem;

        gap: 1.1rem;

        h1 {
            font-size: 3.7rem;
            font-weight: bold;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            white-space: nowrap;
        }
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
`;