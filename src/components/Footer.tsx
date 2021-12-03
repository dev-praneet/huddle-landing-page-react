import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 10rem;
    margin: 0 auto;
`;

const style = {
    height: '35',
    width: '35',
    color: 'white'
}

const Footer: React.FC = () => {
    return (
        <Container>
            <FontAwesomeIcon icon={faFacebook} style={style}/>
            <FontAwesomeIcon icon={faTwitter} style={style}/>
            <FontAwesomeIcon icon={faInstagram} style={style}/>
        </Container>
    )
}   

export default Footer;