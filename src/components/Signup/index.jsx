import React, { useState } from "react";
import { Button, Container, Input, Label, Title, WrapInput } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../loading";
export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState("");
  const [reSecret, setReSecret] = useState("");
  const register = async () => {
    if (reSecret !== secret) {
      alert("Iltimos parollarni tekshiring");
    } else {
      setLoading(true);
      await axios
        .post(
          "https://0001.uz/signup",
          {
            email,
            key,
            secret,
            name,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("key", key);
          localStorage.setItem("secret", secret);
          setLoading(false);
        });

      navigate("/properties");
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Title>Registration</Title>
      <WrapInput>
        <Input onChange={(e) => setName(e.target.value)} type={"text"} />
        <Label>Your name</Label>
      </WrapInput>
      <WrapInput>
        <Input onChange={(e) => setKey(e.target.value)} type={"text"} />
        <Label>Your key</Label>
      </WrapInput>
      <WrapInput>
        <Input onChange={(e) => setEmail(e.target.value)} type={"email"} />
        <Label>Email</Label>
      </WrapInput>
      <WrapInput>
        <Input onChange={(e) => setSecret(e.target.value)} type={"password"} />
        <Label>Your secret</Label>
      </WrapInput>
      <WrapInput>
        <Input
          onChange={(e) => setReSecret(e.target.value)}
          type={"password"}
        />
        <Label>Re-secret</Label>
      </WrapInput>
      <WrapInput>
        <Button onClick={() => register()}>Register</Button>
      </WrapInput>
    </Container>
  );
};

export default SignUp;
