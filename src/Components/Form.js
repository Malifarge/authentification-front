/* eslint-disable react-hooks/exhaustive-deps */

import Input from "./Input"
import Buttons from "./Button"
// import axios from "axios"


import './App.css'

import { useState, useContext,useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from '../Context/User'

import { login,CreateUser } from "../API/Auth"


const Form = ({type,update}) =>{

    const navigate= useNavigate()

    const { setToken, user, setUser } = useContext(UserContext)

    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [picture,setPicture] = useState(null)

    useEffect(() => {
        if (user) {
          navigate('/profil')
        }
      }, [user])

      const handleFirstNameChange = e =>{
        setFirstName(e.target.value)
    }

    const handleLastNameChange = e =>{
        setLastName(e.target.value)
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handlePictureChange = e =>{
        console.log(e.target.value);
        setPicture(e.target.value);
    }

    const handleLoginClick = () =>{
        navigate("/")
    }
    
    const handleSignUpClick = () =>{
        navigate("/signUp")
    }

    const handleSignSubmit = async e =>{
        e.preventDefault()
        if(update){
            console.log(update)
        }else{
            const user = {
                firstName,
                lastName,
                email,
                password,
                picture
              }
            const createUser = await CreateUser(user)
            setUser(createUser)
        }
    }

    const handleLogSubmit = async e =>{
        e.preventDefault()

        const user = {
            email,
            password
          }
      
          const { token } = await login(user)

          if(token){
            setToken(token)
          }else{
            navigate("/signUp")
          }
        
    }

    if(type==="SignUp"){
        return(
            <form onSubmit={handleSignSubmit}>
                <Input label="firstname" type="text" handleChange={handleFirstNameChange} required variant="outlined" />
                <Input label="lastname" type="text" handleChange={handleLastNameChange} required variant="outlined" />
                <Input label="email" type="email" handleChange={handleEmailChange} required variant="outlined" />
                <Input label="password" type='password' handleChange={handlePasswordChange} required variant='outlined'/>
                <Input label="profil picture" type='file' handleChange={handlePictureChange} required variant='outlined'/>
                <div>
                    
                    <Buttons variant="outlined" type="submit" text="Sign up" color="#FFEE55" background="#242424" border="#FFEE55" />
                    <Buttons variant="contained" handleClick={handleLoginClick} text="Login" color="black" background="#FFEE55" border="#FFEE55" />

                </div>
                
            </form>
        )
    }else if (type==="Login"){
        return(
            <form onSubmit={handleLogSubmit}>
                <Input label="email" type="email" handleChange={handleEmailChange} required variant="outlined" />
                <Input label="password" type='password' handleChange={handlePasswordChange} required variant='outlined'/>

                <div>

                    <Buttons variant="outlined" type="submit"  text="Login" color="#FFEE55" background="#242424" border="#FFEE55" />
                    <Buttons variant="contained" handleClick={handleSignUpClick} text="Sign up" color="black" background="#FFEE55" border="#FFEE55"/>

                </div>
                
            </form>
        )
    }
}

export default Form