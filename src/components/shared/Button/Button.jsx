import styled from 'styled-components';

const Btn = styled.button`
  width: 280px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 20px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};

  &.accent {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    border: none;
  }

  &.plus {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    border: none;
    border-radius: 100%;

    &:before {
      content: '';
      display: block;
      width: 20px;
      border: 1px solid #ffffff;
      transform: rotate(-90deg);
      position: absolute;
      top: 21px;
      left: 11px;
      margin: auto;
    }

    &:after {
      content: '';
      display: block;
      width: 20px;
      border: 1px solid #ffffff;
      transform: rotate(-180deg);
      position: absolute;
      top: 21px;
      left: 11px;
      margin: auto;
    }
  }
`;

const Button = ({ text, type = 'button', pattern }) => {
  return (
    <Btn className={pattern} type={type}>
      {text}
    </Btn>
  );
};

export default Button;
