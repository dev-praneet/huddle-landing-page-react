import React from 'react';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import { Dummy } from './components/Dummy';
import { GlobalStyle } from './GlobalStyle';

import bgMobile from './images/bg-mobile.svg';
import bgDesktop from './images/bg-desktop.svg';


const Wrapper = styled.div`
  background: var(--purple);
`;

const FirstHalf = styled.div`
  background: url(${bgMobile}) no-repeat;
  background-position: center;
  background-size: cover; 
  `;
  
  const SecondHalf = styled.div`
  
  `;
  
  const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <FirstHalf>
        <Container>
          <Dummy height='2'/>
          <Navigation />
          <Dummy height='3.5'/>
          <Hero />
          <Dummy height='2'/>
        </Container>
      </FirstHalf>
      <SecondHalf>
        <Container>
          <Dummy height='2'/>
          <Content/>
          <Dummy height='5'/>
          <Footer/>
          <Dummy height='3'/>
        </Container>
      </SecondHalf>
    </Wrapper>
  );
}

export default App;
