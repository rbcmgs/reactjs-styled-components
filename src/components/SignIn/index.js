import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignInElements';

const SignIn = () => {
  return(
      <>
        <Container>
            <FormWrap>
                <Icon to='/'>ReactJS</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput name='email' type='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput name='password' type='password' required />
                        <FormButton type='submit'>Sign In</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
      </>
  );
};

export default SignIn;
