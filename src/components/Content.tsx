import styled from 'styled-components';
import { Dummy } from './Dummy';


const Container = styled.div`
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        color: white;
        text-align: center;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: hsl(0deg, 0%, 80%);
        text-align: center;
        font-size: 1.3rem;
        line-height: 1.5;
    }
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 1em 5em;
    border: none;
    border-radius: 2em;
    font-size: 1.1rem;
    color: var(--purple);
    box-shadow: 0 0 8px black;

    :hover {
        color: white;
        background-color: var(--magenta);
    }
`;

const Content: React.FC = () => {
    return (
        <Container>
            <h1>
                Build The Community Your Fans Will Love
            </h1>
            <Dummy height='1.5'/>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Dummy height='2'/>
            <Button>
                Register
            </Button>
        </Container>
    )
} 

export default Content;