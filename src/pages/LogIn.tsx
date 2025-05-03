import {
  Button,
  Field,
  Fieldset,
  Input,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/api/users/log-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: "Jake3496",
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data) {
          window.location.href = "/";
        }
        console.log(data);
      })
      .catch(console.log);
  }

  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root gap='2'>
          <Fieldset.Legend
            fontSize='4xl'
            textAlign='start'
          >
            Log In
          </Fieldset.Legend>
          <Fieldset.Content
            textAlign='start'
            color='gray.400'
          >
            Sign into your account
          </Fieldset.Content>

          <Field.Root
            orientation='horizontal'
            paddingTop='2'
          >
            <Field.Label>Email address</Field.Label>
            <Input
              placeholder='Email address'
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <Field.HelperText></Field.HelperText>
            <Field.ErrorText>Must have @ and .com</Field.ErrorText>
          </Field.Root>

          <Field.Root orientation='horizontal'>
            <Field.Label>Password</Field.Label>
            <Input
              placeholder='Password'
              type='password'
              onChange={event => setPassword(event.target.value)}
              value={password}
            />
            <Field.HelperText></Field.HelperText>
            <Field.ErrorText>Must have @ and .com</Field.ErrorText>
          </Field.Root>

          <Field.Root orientation='horizontal'>
            <Field.Label>Hide Password</Field.Label>
            <Switch.Root>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Root>
          </Field.Root>

          <Button
            backgroundColor='purple'
            type='submit'
          >
            Log In
          </Button>
        </Fieldset.Root>
      </form>

      <Text
        textAlign='center'
        paddingTop='4'
      >
        Already have an account? <NavLink to='/sign-up'>Sign Up</NavLink>
      </Text>
    </VStack>
  );
};

export default LogIn;
