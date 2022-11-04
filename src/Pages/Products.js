/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../Context/User"

import Homepage from "../Components/Templates/Homepage"

const Products = () => {
  const{user} = useContext(UserContext)
  const navigate = useNavigate()


useEffect(()=>{
  if(!user){
    navigate("/")
  }
},[])

    return <Homepage/>
  }
  
export default Products