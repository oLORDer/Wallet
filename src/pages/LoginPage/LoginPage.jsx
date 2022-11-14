import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import LoginForm from 'components/LoginForm/LoginForm';

import loginImg from 'images/login/img.png';
import frameDesc from 'images/login/frameDesc.png';
import bg1 from 'images/login/bg-1.png';
import bg2 from 'images/login/bg-2.png';

const Section = styled.section`
  background-color: #e7eaf2;
  background-image: url(${bg1}), url(${bg2});
  background-position: right 0 top 0, left 0 bottom 0;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;

  .finance-app {
    font-family: 'Poppins';
    font-size: 30px;
  }
`;

// ForTablet
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin-bottom: 50px;
`;

// ForDesk
const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .wrappForDesk {
    background: rgba(235, 235, 255, 0.4);
    backdrop-filter: blur(25px);
    height: 100vh;
    padding: 136px 91px 116px 107px;
    display: flex;
    align-items: center;
  }
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin-left: 76px;
`;

const LoginPage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesc = useMediaQuery({ minWidth: 1280 });

  if (isDesc) {
    return (
      <Section>
        <Div>
          <DescWrapper>
            <img src={frameDesc} alt="Finance App" width="435" />
            <p className="finance-app">Finance App</p>
          </DescWrapper>
          <div className="wrappForDesk">
            <LoginForm />
          </div>
        </Div>
      </Section>
    );
  }

  if (isTablet) {
    return (
      <Section>
        <div className="container">
          <Wrapper>
            <img src={loginImg} alt="Finance App" width="260" />
            <p className="finance-app">Finance App</p>
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
