import H1 from '../H1'
import Form from '../Form';

import Logo from '../../images/VibesLogo.png'

const EditUser = () => {
  return (
    <section>
        <img src={Logo} alt='Vibes'/>
        <article>
            <H1><span>V</span>ibes<span>.</span></H1>
            <Form type="SignUp" update/>
        </article>
    </section>
  )
};
export default EditUser;
