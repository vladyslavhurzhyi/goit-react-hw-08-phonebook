import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
