
// import Card from "../Card";
import SideBar from "../SideBar";


const Profile = ({user, favorite}) => {

  return (
    <div className="profile-container container">
    <SideBar user={user}/>
    <div className="user">
    <img src="" alt="profile"/>
    <h1>{user.firstName}</h1>
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
