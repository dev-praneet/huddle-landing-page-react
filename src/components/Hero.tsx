import styled from 'styled-components';
import {ReactComponent as HeroImage} from '../images/illustration-mockups.svg';

const Container = styled.div`
    max-width: 100%;
`;

const Hero: React.FC = () => {
    return (
        <Container>
            <HeroImage style={{display: 'block'}} viewBox='0 0 709 506' width='100%' height='100%'/>
        </Container>
    )
}

export default Hero;