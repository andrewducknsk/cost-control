import styled from 'styled-components';
import Styled from '../controls/button-styled';

const GreetingStyled = styled.section``;

const GreetingTitleStyled = styled.h2``;

const GreetingDescriptionStyled = styled.p``;

const GreetingButtonStyled = styled(Styled.Button)`
	width: 400px;
	height: 50px;
`;

export default {
	Greeting: GreetingStyled,
	Title: GreetingTitleStyled,
	Description: GreetingDescriptionStyled,
	Button: GreetingButtonStyled,
};
