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

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (password === repeatPassword) {
      fetch("http://localhost:4000/api/users/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(console.log)
        .catch(console.log);
      return;
    }
    console.log("passwords must match");
  }

  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root gap='4'>
          <Fieldset.Legend
            fontSize='4xl'
            textAlign='start'
          >
            Sign Up
          </Fieldset.Legend>
          <Fieldset.Content
            textAlign='start'
            color='gray.400'
          >
            Create a free account
          </Fieldset.Content>

          <Field.Root
            orientation='horizontal'
            paddingTop='8'
          >
            <Field.Label>Username</Field.Label>
            <Input
              placeholder='Username'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <Field.HelperText></Field.HelperText>
            <Field.ErrorText>Must have @ and .com</Field.ErrorText>
          </Field.Root>

          <Field.Root orientation='horizontal'>
            <Field.Label>Email address</Field.Label>
            <Input
              placeholder='Email address'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <Field.HelperText></Field.HelperText>
            <Field.ErrorText>Must have @ and .com</Field.ErrorText>
          </Field.Root>

          <Field.Root orientation='horizontal'>
            <Field.Label>Password</Field.Label>
            <Input
              type={`${showPassword ? "password" : "text"}`}
              placeholder='Password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Field.HelperText></Field.HelperText>
            <Field.ErrorText>Must have @ and .com</Field.ErrorText>
          </Field.Root>

          <Field.Root orientation='horizontal'>
            <Field.Label>Repeat Password</Field.Label>
            <Input
              type={`${showPassword ? "password" : "text"}`}
              placeholder='Repeat Password'
              value={repeatPassword}
              onChange={event => setRepeatPassword(event.target.value)}
            />
            <Field.HelperText></Field.HelperText>
            <Field.ErrorText>Must have @ and .com</Field.ErrorText>
          </Field.Root>

          <Field.Root orientation='horizontal'>
            <Field.Label>Hide Password</Field.Label>
            <Switch.Root
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            >
              <Switch.HiddenInput />
              <Switch.Control
                backgroundColor={`${showPassword ? "purple" : ""}`}
              >
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Root>
          </Field.Root>

          <Button
            type='submit'
            backgroundColor='purple'
          >
            Sign up
          </Button>
        </Fieldset.Root>

        <Text
          textAlign='center'
          paddingTop='4'
        >
          Already have an account? <NavLink to='/log-in'>Sign in</NavLink>
        </Text>
      </form>
    </VStack>
  );
};

export default SignUp;
