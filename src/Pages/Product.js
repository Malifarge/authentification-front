/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../Context/User"

import Annonce from "../Components/Templates/Annonce"
const Product = () => {

  const{user} = useContext(UserContext)
  const navigate = useNavigate()


useEffect(()=>{
  if(!user){
    navigate("/")
  }
},[])

    return <Annonce/>
  }
  
export default Product