import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 42.8rem;
    height: 100vh;

    margin: 0 auto;
`;

//Menu

export const Menu = styled.div`
    height: 100vh;

    display: grid;
    grid-template-rows: 11.4rem 12rem auto 7.7rem;
    grid-template-areas: 
    "menu-header"
    "menu-section"
    "menu-options"
    "footer"
    ;
`;

export const MenuHeader = styled.header`
    grid-area: menu-header;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 5.6rem 2.8rem 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    
    > a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-size: 2.1rem;

        svg {
            margin-right: 1.6rem;
            width: 2.4rem;
            height: 2.4rem;
        }
    }
`;

export const MenuSection = styled.section`
    grid-area: menu-section;
    padding: 3.6rem 2.8rem;
`;

export const MenuOptions = styled.ul`
    grid-area: menu-options;
    padding: 0 2.8rem;

    > li {
        list-style: none;

        padding: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 2.4rem;

        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
`;

//Homepage

export const Mainpage = styled.div`
    height: 100vh;   
`;

export const Homepage = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 11.4rem 22.6rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "section"
    "content"
    "footer"
    ;
`;

export const Section = styled.section`
    grid-area: section;

    margin: 4.4rem 1.6rem 6.2rem 3.6rem;

    border-radius: 0.3rem;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    display: flex;
    align-items: center;
    justify-content: flex-start;

    > img {
        margin-top: -3rem;
        margin-left: -3rem;
    }

    > div {
        margin-right: 0.8rem;

        h2 {
            margin-bottom: 0.3rem;

            font-size: 1.8rem;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            white-space: nowrap;
        }

        p {
            font-size: 1.2rem;
            font-family: 'Poppins', sans-serif;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            text-align: left;
        }
    }
`;

export const Content = styled.div`
    > p {
        margin: 0 2.4rem 2.4rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > ul {
        max-width: 40.4rem;

        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        margin-left: 2.4rem;
        margin-bottom: 2.4rem;

        &::-webkit-scrollbar {
            background: transparent;
            scroll-padding-top: 10rem;
        }
    }
`;