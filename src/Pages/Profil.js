import { useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from '../Context/User'

const Profil = () => {

  const navigate= useNavigate()

  const{user} = useContext(UserContext)

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[])

  // useEffect(()=>{
  //   console.log(user);
  // },[user])

    return (
      <div>
       <h1>profil</h1>  
      </div>
    )
  }
  
export default Profil