import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// import Card from "../Card";
import SideBar from "../SideBar";
import logoutimg from "../../images/logout.png"

import { UserContext } from '../../Context/User'

const Profile = ({user, favorite}) => {

  const navigate = useNavigate()

  const{logout} =useContext(UserContext)

  const handleLogoutClick = () =>{
    logout()
    navigate("/")
  }

  return (
    <div className="main-container ">
    <SideBar user={user}/>
    <div className="user">
    <img src="" alt="profile"/>
    <h1>{user.firstName}</h1>
    <img src={logoutimg} alt="logout" onClick={handleLogoutClick}/>
    </div>
    {/* <div className="favorites">
        <h2>Favorites</h2>
        <div>{favorites.map((favorite) => {
            return(
            <Card/>
            )
        })}</div>
    </div> */}
    </div>
  );
};

export default Profile;
