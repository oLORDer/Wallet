import styled from 'styled-components';

import Logo from '../shared/Logo';
import { Button } from 'components/shared';
import TextField from 'components/shared/TextField';

const Wrapper = styled.div`
  padding-top: 107px;
  background-color: #fff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 533px;
    border: 1px solid red;
  }

  img.logo {
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  button:not(:last-child) {
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 40px;
  }
`;

export default function LoginForm() {
  return (
    <Wrapper>
      <Logo />
      <form>
        <label>
          <TextField type="email" placeholder={'E-mail'} />
        </label>
        <label>
          <TextField type="password" placeholder={'Password'} />
        </label>
      </form>
      <Button text="log in" type="submit" pattern="accent" />
      <Button text="register" type="submit" />
    </Wrapper>
  );
}
