import styled from 'styled-components';
import { Dummy } from './Dummy';


const Container = styled.div`
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.7rem;
        font-weight: 600;
        color: white;
        text-align: center;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.0rem;
        font-weight: 400;
        color: hsl(257deg, 60%, 90%);
        text-align: center;
        line-height: 1.5;
    }

    @media(min-width: ${props => props.theme.breakpoint.mobile}) {
        h1 {
            font-size: 2.0rem;
            text-align: left;
        }

        p {
            text-align: left;
        }
    }
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 0.7em 5em;
    border: none;
    border-radius: 2em;
    font-size: 0.9rem;
    color: var(--purple);
    box-shadow: 0 0 5px black;
    transition-property: background, color;
    transition-duration: 300ms;
    
    :hover {
        cursor: pointer;
        color: white;
        background-color: var(--magenta);
    }
    
    @media(min-width: ${props => props.theme.breakpoint.mobile}) {
        margin: unset;
        padding: 0.8em 3.5em;

    }
`;

const Content: React.FC = () => {
    return (
        <Container>
            <h1>
                Build The Community Your Fans Will Love
            </h1>
            <Dummy height={{mobile: '1.5', desktop: '1.5'}}/>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Dummy height={{mobile: '2', desktop: '2'}}/>
            <Button>
                Register
            </Button>
        </Container>
    )
} 

export default Content;