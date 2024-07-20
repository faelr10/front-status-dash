import {
  BoxForm,
  BoxImgTitle,
  BoxLogin,
  Container,
  ForgotPassword,
  BoxEnter,
  BoxRegister,
  BoxEmail,
  BoxPassword,
} from "./style";

import LogoBranca from "../images/LogoBranca.jpeg";
import { useState } from "react";
import { loginHttp } from "../HttpRequest/Auth/httpRequest";

export function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  function handleSubmit() {
    console.log(email, password);
    const data = {
      email,
      password,
    };
    loginHttp(data)
      .then((response) => {
        handleLogin(true);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.error("Error fetching obras:", error);
      });
  }

  return (
    <Container>
      <BoxLogin>
        <BoxImgTitle>
          <img
            src={LogoBranca}
            alt="LogoBranca"
            style={{ width: "50%", height: "90%" }}
          />
        </BoxImgTitle>
        <BoxForm>
          <BoxEmail>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              required
              onBlur={handleEmailChange}
            />
          </BoxEmail>
          <BoxPassword>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
              onBlur={handlePasswordChange}
            />
          </BoxPassword>
        </BoxForm>
        <ForgotPassword>
          <a href="/forgotPassword">Esqueceu a senha?</a>
        </ForgotPassword>
        <BoxEnter>
          <button onClick={handleSubmit} type="submit">
            Entrar
          </button>
        </BoxEnter>
        <BoxRegister>
          <a href="/register">Cadastre-se</a>
        </BoxRegister>
      </BoxLogin>
    </Container>
  );
}
