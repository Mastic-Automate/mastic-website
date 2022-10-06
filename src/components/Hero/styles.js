import styled from "styled-components";
import {RegularSectionWrapper} from "../RegularSection/styles.js";
import bgHero from '/img/mastic-background.webp';

const media = {
    tablet: '@media(max-width: 700px)',
};

export const HeroWrapper = styled(RegularSectionWrapper)`
    width: 100vw;
    max-width: 1300px;
    height: 100vh;
    max-height: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0;

    &#hero {
        background-image: url(${bgHero});
    }

    & img {
        width: 100%;
    }
    & .section-text h1 {
        font-size: 10rem;
        line-height: 11.719rem;
        color: var(--color-title);
    }
    & .section-text p {
        font-size: 5.5rem;
        line-height: 6.445rem;
        font-weight: 400;
        color: var(--color-text);
    }
    ${media.tablet} {
        &#hero {
            max-height: 250px;
        }
        margin-top: 5rem;
    }

`;