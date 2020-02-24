import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import homeHeader from 'assets/home.png';

const Container = styled.div`
    background-color: #fff;
    height: calc(100vh);
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const Header = styled.div`
    background-color: #50B296;
    height: calc(50vh);
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-radius: 20px;
    margin: 5%;
`;
const HeaderSection = styled.span`
    display: flex;
    flex-direction:column;
    align-content: center;
    justify-content: center;

`;
const HeaderSentence = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
    font-size: 2.5rem;
    text-shadow: 0px 5px 5px rgba(117, 117, 117, 0.57);
`;

const HomePresenter = () => (
    <>
        <Helmet>
            <title>HOME | GradeLec</title>
        </Helmet>
        <Container>
            <Header>
                <HeaderSection>
                    <img src={homeHeader} alt="header"></img>
                </HeaderSection>
                <HeaderSection>
                    <HeaderSentence>You were graded?</HeaderSentence>
                    <HeaderSentence>Now,</HeaderSentence>
                    <HeaderSentence>you grade it!</HeaderSentence>
                </HeaderSection>
            </Header>
        </Container>
    </>
);

export default HomePresenter;