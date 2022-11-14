import styled from 'styled-components';

import Logo from '../shared/Logo/Logo';
import Button from 'components/shared/Button';
import TextField from 'components/shared/TextField';
import { field } from 'components/shared/TextField/fields';

const Wrapper = styled.div`
  padding-top: 107px;
  background-color: #fff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 60px 60px 60px;
    width: 533px;
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
          <TextField {...field.email} />
        </label>
        <label>
          <TextField {...field.password} />
        </label>
      </form>
      <Button text="log in" type="submit" pattern="accent" />
      <Button text="register" type="submit" />
    </Wrapper>
  );
}
