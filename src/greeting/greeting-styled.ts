import styled from 'styled-components';
import Styled from '../controls/button/button-styled';

const GreetingStyled = styled.section``;

const GreetingTitleStyled = styled.h2``;

const GreetingDescriptionStyled = styled.p`
  margin-top: 30px;
`;

const GreetingButtonStyled = styled(Styled.Button)`
  display: block;
  margin: 50px auto 0;
  width: 400px;
  height: 50px;
`;

export default {
  Greeting: GreetingStyled,
  Title: GreetingTitleStyled,
  Description: GreetingDescriptionStyled,
  Button: GreetingButtonStyled,
};
