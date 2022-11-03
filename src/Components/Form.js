/* eslint-disable react-hooks/exhaustive-deps */

import Input from "./Input"
import Buttons from "./Button"
import axios from "axios"

import { useState, useContext,useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from '../Context/User'

import { login,CreateUser } from "../API/Auth"

const Form = ({type,update}) =>{

    const navigate= useNavigate()

    const { setToken, user, setUser } = useContext(UserContext)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [picture,setPicture] = useState(null)

    useEffect(() => {
        if (user) {
          navigate('/profile')
        }
      }, [user])

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handlePictureChange = e =>{
        setPicture(e.target.files[0]);
    }

    const handleLoginClick = () =>{
        navigate("/")
    }
    
    const handleSignInClick = () =>{
        navigate("/signin")
    }

    const handleSignSubmit = async e =>{
        e.preventDefault()
        onFileUpload()
        if(update){
            console.log(update)
        }else{
            const user = {
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
          setToken(token)
        
    }

    const onFileUpload = () => {
    
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          picture,
          picture.name
        );
      
        // Details of the uploaded file
        console.log(picture);
      
        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
      };

    if(type==="SignIn"){
        return(
            <form onSubmit={handleSignSubmit}>
                <Input label="email" type="email" handleChange={handleEmailChange} required variant="outlined" />
                <Input label="password" type='password' handleChange={handlePasswordChange} required variant='outlined'/>
                <Input label="profil picture" type='file' handleChange={handlePictureChange} required variant='outlined'/>
                <div>
                    
                    <Buttons variant="outlined" type="submit" text="Sign in" color="#FFEE55" background="#242424" border="#FFEE55" />
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
                    <Buttons variant="contained" handleClick={handleSignInClick} text="Sign in" color="black" background="#FFEE55" border="#FFEE55"/>

                </div>
                
            </form>
        )
    }
}

export default Form