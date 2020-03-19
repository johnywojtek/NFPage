import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10rem 14rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10rem;
    grid-row-gap: 6rem;
`;
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Title = styled.h3`
    width: 100%;
    margin-left: 8rem;
    text-transform: uppercase;
    font-size: 5rem;
    padding-bottom: 2rem;

    font-weight: 200;
    border-bottom: 2px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.blue2};
`;

const Text = styled.p`
    color: ${({ theme }) => theme.black};
    font-size: 1.6rem;
    font-weight: 500;
`;
const Idea = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Idea fundacji</Title>
            </TitleContainer>

            <Text>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus
                error sit voluptatem accusantium doloremque eopsloi laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                sunot explicabo. Nemo ernim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sedopk quia consequuntur magni dolores eos qui rationesopl voluptatem
                sequi nesciunt. Neque porro quisquameo est, qui dolorem ipsum quia dolor sit amet,
                eopsmiep consectetur, adipisci velit, seisud quia non numquam eius modi tempora
                incidunt ut labore et dolore wopeir magnam aliquam quaerat voluptatem
                eoplmuriquisqu.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur eplos eklosi adipisifwcing elit, sed doio
                eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim adeop
                minim veeniam, quis nostruklad exercitation ullamico laboris nisi ut aliquip eux ea
                commodo consequatopo duis aute irure dolor in reprehenderit in tufpoy ilojsuir
                voluptate velit esse cillum dolore eu fugiat nulla eope parieratur. Excepteur sint
                occaecat cupidatat.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur eplos eklosi adipisifwcing elit, sed doio
                eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim adeop
                minim veeniam, quis nostruklad exercitation ullamico laboris nisi ut aliquip eux ea
                commodo consequatopo duis aute irure dolor in reprehenderit in tufpoy ilojsuir
                voluptate velit esse cillum dolore eu fugiat nulla eope parieratur. Excepteur sint
                occaecat cupidatat.
            </Text>
        </Container>
    );
};

export default Idea;
