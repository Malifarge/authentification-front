import H1 from "../H1";
import Form from "../Form";

import Logo from "../../images/VibesLogo.png";

const CreateUser = () => {
  return (
    <section className="login-container container">
      <img src={Logo} alt="Vibes" />
      <article className="login">
        <H1>
          <span>V</span>ibes<span>.</span>
        </H1>
        <Form type="SignUp" />
      </article>
    </section>
  );
};

export default CreateUser;
