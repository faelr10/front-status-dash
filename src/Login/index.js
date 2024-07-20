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

//import Logo from "../../images/Logo.jpeg";
import LogoBranca from "../images/LogoBranca.jpeg";

export function Login() {
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
            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
          </BoxEmail>
          <BoxPassword>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </BoxPassword>
        </BoxForm>
        <ForgotPassword>
            <a href="/forgotPassword">Esqueceu a senha?</a>
        </ForgotPassword>
        <BoxEnter></BoxEnter>
        <BoxRegister></BoxRegister>
      </BoxLogin>
    </Container>
  );
}
