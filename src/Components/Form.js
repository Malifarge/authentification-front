


import Buttons from "./Button";

import { useState, useEffect } from "react";

import { login, CreateUser } from "../API/Auth";

const Form = ({ type, update, className }) => {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    if (user) {
      navigate("/profil");
    }
  }, [user]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  
const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleSignUpClick = () => {
    navigate("/signUp");
  };

  const handleSignSubmit = async (e) => {
    e.preventDefault();
    if (update) {
      console.log(update);
    } else {
      const user = {
        firstName,
        email,
        password,
      };
      const createUser = await CreateUser(user);
      setUser(createUser);
    }
  };

  const handleLogSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const { token } = await login(user);

    if (token) {
      setToken(token);
    } else {
      navigate("/signUp");
    }
  };

  if (type === "SignUp") {
    return (
      <form>
        <Input
          label="firstname"
          type="text"
          handleChange={handleFirstNameChange}
          required
          variant="outlined"
        />
        
        <Input
          label="email"
          type="email"
          handleChange={handleEmailChange}
          required
          variant="outlined"
        />
        <Input
          label="password"
          type="password"
          handleChange={handlePasswordChange}
          required
          variant="outlined"
        />
        
        <div className="buttons">
          <Buttons
            variant="outlined"
            type="submit"
            text="Sign up"
           
          />
          <Buttons
            variant="contained"
            handleClick={handleLoginClick}
            text="Login"
            
          />
        </div>
      </form>
    );
  } else if (type === "Login") {
    return (
      <form className={className} onSubmit={handleLogSubmit}>
        <Input
          label="email"
          type="email"
          handleChange={handleEmailChange}
         
        />
        <Input
          label="password"
          type="password"
          handleChange={handlePasswordChange}
        />

        <div>
          <Buttons
            variant="outlined"
            type="submit"
            text="Login"
            />
          <Buttons
            variant="contained"
            handleClick={handleSignUpClick}
            text="Sign up"
          />
        </div>
      </form>
    );
  }
};

export default Form;
