import React from 'react';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import { Dummy } from './components/Dummy';
import { GlobalStyle } from './GlobalStyle';

import Theme from './Theme';

import bgMobile from './images/bg-mobile.svg';
import bgDesktop from './images/bg-desktop.svg';


const Wrapper = styled.div`
  background: var(--purple);
@media(min-width: ${props => props.theme.breakpoint.mobile}) {
    background: url(${bgDesktop}), var(--purple);
    background-position: center;
    background-size: cover;
    display: flex;
  }
`;

const FirstHalf = styled.div`
  background: url(${bgMobile}) no-repeat;
  background-position: center;
  background-size: cover;

  @media(min-width: ${props => props.theme.breakpoint.mobile}) {
    flex-basis: 55%;
    background: unset;
    padding-left: 2em;
  }
  `;
  
  const SecondHalf = styled.div`
  @media(min-width: ${props => props.theme.breakpoint.mobile}) {
    flex-basis: 45%;
    // align-self: flex-end;
    padding-right: 2em;
  }
  `;
  
  const Container = styled.div`
  max-width: min(80%, 500px);
  margin: 0 auto;

  @media(min-width: ${props => props.theme.breakpoint.mobile}) {
    max-width: 90%;
  }
`;

function App() {
  return (
      <Theme>
        <GlobalStyle/>
        <Wrapper>
          <FirstHalf>
            <Container>
              <Dummy height={{mobile: '2', desktop: '2'}}/>
              <Navigation />
              <Dummy height={{mobile: '3.5', desktop: '2.5'}}/>
              <Hero />
              <Dummy height={{mobile: '2', desktop: '4'}}/>
            </Container>
          </FirstHalf>
          <SecondHalf>
            <Container>
              <Dummy height={{mobile: '2', desktop: '11'}}/>
              <Content/>
              <Dummy height={{mobile: '5', desktop: '10'}}/>
              <Footer/>
              <Dummy height={{mobile: '3', desktop: '1'}}/>
            </Container>
          </SecondHalf>
        </Wrapper>
      </Theme>
  );
}

export default App;
