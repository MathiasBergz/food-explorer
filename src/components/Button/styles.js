import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    border: none;
    border-radius: 0.5rem;

    padding: 1.2rem auto;
    margin-bottom: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        margin-right: 0.5rem;
    }

    &:disabled {
        opacity: 0.5;
    }
`;