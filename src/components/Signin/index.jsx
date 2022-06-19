import React from "react";
import { Button, Container, Input, Label, Title, WrapInput } from "./style";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Container>
      <Title>Sign in</Title>
      <WrapInput>
        <Input type={"text"} />
        <Label>Username</Label>
      </WrapInput>
      <WrapInput>
        <Input type={"text"} />
        <Label>Password</Label>
      </WrapInput>
      <WrapInput>
        <WrapInput.Checkbox type="checkbox" />
        <WrapInput.Text>Remember me</WrapInput.Text>
        <WrapInput.Forgot>Forgot</WrapInput.Forgot>
      </WrapInput>
      <WrapInput>
        <Link to={"/home"}>
          <Button>Login</Button>
        </Link>
      </WrapInput>
    </Container>
  );
};

export default SignIn;
