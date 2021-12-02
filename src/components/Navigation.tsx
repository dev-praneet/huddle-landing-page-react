import styled from 'styled-components';

import {ReactComponent as Logo} from '../images/logo.svg';

const Container = styled.nav`

`;

const Navigation: React.FC = () => {
    return (
        <Container>
            <Logo viewBox="0 0 264 49"/>
        </Container>
    )
}

export default Navigation;