import Card from "../Card";
import SideBar from "../SideBar";

const Homepage = ({offers}) => {  

  return (
    <div classname="main-container">
    <SideBar/>
    <div className="offers">
    {offers.map((offer) => {
    return (<Card/>)
    })}
    </div>
    </div>
  )
}

export default Homepage;
