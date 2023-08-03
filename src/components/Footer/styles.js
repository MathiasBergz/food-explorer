import { styled } from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.9rem 2.7rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > div {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};

        display: flex;
        align-items: center;

        font-weight: bold;
        white-space: nowrap;

        img {
            width: 2.2rem;
            height: 1.8rem;

            margin-right: 0.6rem;
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 1.2rem;
        font-family: 'DM Sans', sans-serif;
        white-space: nowrap;
    }
`;