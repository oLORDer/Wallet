import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import LoginForm from 'components/LoginForm/LoginForm';

import loginImg from '../images/login-img.png';
import bg1 from '../images/login-bg-1.png';
import bg2 from '../images/login-bg-2.png';

const Section = styled.section`
  background-color: #e7eaf2;
  background-image: url(${bg1}), url(${bg2});
  background-position: right 0 top 0, left 0 bottom 0;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
`;

const LoginPage = () => {
  const isTabletOrDesc = useMediaQuery({ minWidth: 768 });

  if (isTabletOrDesc) {
    return (
      <Section>
        <div className="container">
          <Wrapper>
            <img src={loginImg} alt="Finance App" />
            <p>Finance App</p>
          </Wrapper>
          <LoginForm />
        </div>
      </Section>
    );
  }

  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
