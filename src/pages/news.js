import React from 'react';
import styled from 'styled-components';
import NewsItem from '../components/common/NewsItem';

const Container = styled.div`
    max-width: 90rem;
    margin: 10rem auto;
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 200;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.blue1};
    padding-bottom: 2rem;
    margin-bottom: 6rem;
    width: 55%;
    border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

const IndexPage = () => {
    return (
        <Container>
            <Title>Aktualności</Title>
            <NewsItem
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                reversed
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                reversed
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                reversed
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                reversed
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                reversed
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
            <NewsItem
                reversed
                title="Excepteur sint occaecat"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                        magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                        consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel
                        sodales dui. Pellentesque mattis non nisi ac mattis. Integer cursus justo
                        urna, vitae sollicitudin metus pellentesque ac. Aliquam dictum risus et
                        tellus faucibus porta."
            />
        </Container>
    );
};

export default IndexPage;
