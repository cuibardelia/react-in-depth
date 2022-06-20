import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {Navigate, useLocation} from 'react-router-dom';
import { IAuthData, useAuthContext } from './Auth.context';
import {Button, Input} from 'components';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {RegularLink} from "../../components/styled-components";

type FormData = {
  email: string;
  password: string;
};

const loginValidationSchema = object({
  email: string()
    .required('Please enter an email address.')
    .email('Your email address does not seem valid.'),
  password: string()
    .required('Please enter a password')
    .min(6, 'Your password should be at least 6 characters long.'),
}).required();

export function Login() {
  const methods = useForm<FormData>({
    resolver: yupResolver(loginValidationSchema),
  });
  const [serverError, setServerError] = useState('');
  const { login, user } = useAuthContext();

  const location = useLocation();

  if (user) {
    const state = location.state as { from: string } | undefined;
    const destination = state?.from ?? '/dashboard';
    return <Navigate to={destination} />;
  }

  async function handleSubmit(formData: FormData) {
    const data: IAuthData = await fetch('http://localhost:3500/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (typeof data !== 'object') {
      // TODO: modal for server error
      setServerError(data);
      return;
    }
    login(data);
  }

  // TODO: Link component

  return (
    <FormProvider {...methods}>
      <div className="w-7/12 m-auto">
        <form onSubmit={methods.handleSubmit(handleSubmit)} noValidate>
          <Input name="email" type="email" labelText="QEmail" />
          <Input name="password" type="password" labelText="Password" />
          <div className={"text-right mb-6"}>Already got an account? <RegularLink to={"/register"}>Register here</RegularLink></div>
          <Button className="bg-purple-800">Sign In</Button>
        </form>
      </div>
    </FormProvider>
  );
}
