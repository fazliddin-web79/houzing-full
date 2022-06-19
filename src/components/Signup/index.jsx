import React from "react";
import { Button, Container, Input, Label, Title, WrapInput } from "./style";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Container>
      <Title>Registration</Title>
      <WrapInput>
        <Input type={"text"} />
        <Label>Username</Label>
      </WrapInput>
      <WrapInput>
        <Input type={"text"} />
        <Label>First name</Label>
      </WrapInput>
      <WrapInput>
        <Input type={"text"} />
        <Label>Last name</Label>
      </WrapInput>
      <WrapInput>
        <Input type={"email"} />
        <Label>Email</Label>
      </WrapInput>
      <WrapInput>
        <Input type={"password"} />
        <Label>Password</Label>
      </WrapInput>
      <WrapInput>
        <Input type={"password"} />
        <Label>Re-enter password</Label>
      </WrapInput>
      <WrapInput>
        <Link to={"/home"}>
          <Button>Register</Button>
        </Link>
      </WrapInput>
    </Container>
  );
};

export default SignUp;
