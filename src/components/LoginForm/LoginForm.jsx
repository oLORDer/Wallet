import styled from 'styled-components';

import Logo from '../shared/Logo';
import { Button } from 'components/shared';
import TextField from 'components/shared/TextField';

const Section = styled.section`
  padding-top: 107px;
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
    <Section>
      <div className="container">
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
      </div>
    </Section>
  );
}
