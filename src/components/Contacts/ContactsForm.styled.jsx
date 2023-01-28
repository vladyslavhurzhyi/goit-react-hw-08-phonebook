import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  input {
    display: flex;
    width: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  padding: 10px;
`;
