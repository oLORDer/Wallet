import styled, { css } from 'styled-components';

import { baseTheme } from 'styles/theme.ts';

const Wrapper = styled.div`
  font-size: 20px;
  color: ${props => props.color ?? 'red'};
`;

const fontStyles = css`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
`;

const Text1 = styled.h1`
  color: ${baseTheme.colors.success};
  ${fontStyles}
`;
const Text2 = styled.p`
  color: blueviolet;
  ${fontStyles}
`;

const RegistrationForm = ({ color }) => {
  return (
    <>
      <Wrapper color={color}>hello</Wrapper>
      <Text1>test-1</Text1>
      <Text2>test-2</Text2>
    </>
  );
};

export default RegistrationForm;
