import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border-radius: 0.8rem;
    margin-bottom: 3.2rem;

    > input {
        width: 100%;

        padding: 1.6rem 1.4rem;

        background: transparent;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin-left: 1.4rem;
        width: 2.4rem;
        height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;