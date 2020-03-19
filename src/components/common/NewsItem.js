import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5rem;
`;
const Img = styled.img`
    height: 26rem;
    border-radius: 0.5rem;
`;
const DescTitle = styled.div`
    color: ${({ theme }) => theme.blue2};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;

    margin-bottom: 2rem;
`;

const Text = styled.div`
    color: ${({ theme }) => theme.black};
    margin-bottom: 1.6rem;
    font-weight: 200;
`;
const Date = styled.div`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.black};
`;
const Line = styled.div`
    margin: 1rem auto;
    width: 28rem;
    height: 1px;
    background-color: ${({ theme }) => theme.gray4};
`;
const NewsItem = () => {
    return (
        <>
            <Container>
                <Img src="https://picsum.photos/250" />
                <DescContainer>
                    <DescTitle>Excepteur sint occaecat</DescTitle>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta.
                    </Text>
                    <Date>01.01.2020</Date>
                </DescContainer>
            </Container>
            <Line />
        </>
    );
};

export default NewsItem;
