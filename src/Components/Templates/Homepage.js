/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useContext } from "react";

import { UserContext } from "../../Context/User";

import Card from "../Card";
import SideBar from "../SideBar";

import { Products } from "../../API/Product";

const Homepage = () => {   

  const [products,setProducts] = useState([])

  const {user} =useContext(UserContext)

  const apiProducts = async () =>{
    const products = await Products()
    setProducts(products)
  }

  useEffect(()=>{
    apiProducts()
  },[])
  return (
    <div className="main-container container">
    {user && <SideBar user={user}/>}
    <div className="offers">
    {products && products.map((product) => {
    return (<Card product={product} key={product.productName} />)
    })}
    </div>
    </div>
  )
}

export default Homepage;
