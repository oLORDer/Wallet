import styled from 'styled-components';

import lock from '../../images/lock.svg';

const Field = styled.input`
  border: none;
  border-bottom: 1px solid;
  border-color: var(--input-color);
  width: 100%;
  font-size: 18px;
  line-height: 1.5;

  &::placeholder {
    color: #bdbdbd;
  }

  /* &[type='password'] {
    padding-left: 54px;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      border: 1px solid red;
      background-image: url(lock);
    }
  } */
`;

export default function TextField({ type = 'text', placeholder }) {
  return <Field type={type} placeholder={placeholder} />;
}
