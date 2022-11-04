import H1 from "../H1";
import Form from "../Form";
import Logo from "../../images/VibesLogo.png";

const Login = () => {
  return (
    <section className="login-container container">
      <img src={Logo} alt="Vibes" />
      <article className="login">
        <H1>
          <span>V</span>ibes<span className="point">.</span>{" "}
        </H1>
        <Form type="Login" />
      </article>
    </section>
  );
};

export default Login;
