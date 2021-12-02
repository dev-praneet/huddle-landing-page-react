import styled from 'styled-components';

type Props = {
    height: string,
}

const Container = styled.div<Props>`
    height: ${props => props.height + 'rem'};
`;

export const Dummy: React.FC<Props> = props => {
    return (
        <Container height={props.height} />
    )
}
