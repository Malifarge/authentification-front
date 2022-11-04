/* eslint-disable react-hooks/exhaustive-deps */

import EditUser from "../Components/Templates/EditUser"

import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../Context/User"

const EditProfil = () => {

  const{user} = useContext(UserContext)
    const navigate = useNavigate()


  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[])

    return <EditUser/>
  }
  
  export default EditProfil