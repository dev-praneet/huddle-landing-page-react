import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 8rem;
    margin: 0 auto;

    @media(min-width: ${props => props.theme.breakpoint.mobile}) {
        margin: unset;
        margin-left: auto;
    }
`;

const Footer: React.FC = () => {
    return (
        <Container>
            <FontAwesomeIcon icon={faFacebook} className='footer-svg'/>
            <FontAwesomeIcon icon={faTwitter} className='footer-svg'/>
            <FontAwesomeIcon icon={faInstagram} className='footer-svg'/>
        </Container>
    )
}   

export default Footer;