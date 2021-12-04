import styled from 'styled-components';

import {ReactComponent as Logo} from '../images/logo.svg';

const Container = styled.nav`

`;

const Navigation: React.FC = () => {
    return (
        <Container>
            <Logo height='50px' viewBox='35 0 198 49'/>
        </Container>
    )
}

export default Navigation;