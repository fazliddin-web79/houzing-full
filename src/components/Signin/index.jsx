import React, { useState } from "react";
import { Button, Container, Input, Label, Title, WrapInput } from "./style";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import axios from "axios";
import Loading from "../loading";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    const calculateMD5 = () => {
      return CryptoJS.MD5(`GET/myself${secret}`).toString();
    };
    const sign = calculateMD5();
    setLoading(true);
    await axios
      .get("https://0001.uz/myself", {
        headers: {
          key,
          sign,
        },
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          localStorage.setItem("key", key);
          localStorage.setItem("secret", secret);
          navigate("/properties");
        }
      })
      .catch((error) => {
        setLoading(false);
        // Handle any errors
        alert("Qaytadan tekshiring" + error);
      });
  };
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Title>Sign in</Title>
      <WrapInput>
        <Input onChange={(e) => setKey(e.target.value)} type={"text"} />
        <Label>Your key</Label>
      </WrapInput>
      <WrapInput>
        <Input onChange={(e) => setSecret(e.target.value)} type={"password"} />
        <Label>Your secret</Label>
      </WrapInput>
      <WrapInput>
        <WrapInput.Checkbox type="checkbox" />
        <WrapInput.Text>Remember me</WrapInput.Text>
        <WrapInput.Forgot>
          <Link to={"/sign-up"}>registor now</Link>
        </WrapInput.Forgot>
      </WrapInput>
      <WrapInput>
        <Button onClick={() => login()}>Login</Button>
      </WrapInput>
    </Container>
  );
};

export default SignIn;
