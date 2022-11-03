import { useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom"

import Profile from "../Components/Templates/Profile"

import { UserContext } from '../Context/User'

const Profil = () => {

  const navigate= useNavigate()

  const favorites=[]

  const{user} = useContext(UserContext)


  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[])
    return <div>{user && <Profile user={user} favorites={favorites}/>}</div>
  }
  
export default Profil