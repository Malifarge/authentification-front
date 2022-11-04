import { useState } from "react";
import Input from "./Input";
import Buttons from "./Button";
import { CreateProduct } from "../API/Product"


const CreateAnnonce = () => {
  const [product, setProduct] = useState(null)
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [picture, setPicture] = useState(null)

  const handleProductNameChange = (e) => {
  setProductName(e.target.value)
}
  const handleDescriptionChange = (e) => {
  setDescription(e.target.value)
}
  const handlePriceChange = (e) => {
  setPrice(e.target.value)
}
  const handlePictureChange = (e) => {
  setPicture(e.target.value)
}

const handleSubmit = async () => {
  const product = {
    productName, 
    description,
    price,
    picture
  }
  const createProduct = await CreateProduct(product)
  setProduct(createProduct)
}
  return(
  <div>
    <form onSubmit={handleSubmit}>
    <Input label="Product name" type="text" handleChange={handleProductNameChange} required variant="outlined" />
    <Input label="description" type='text' handleChange={handleDescriptionChange}  required variant='outlined'/>
    <Input label="price" type='number' handleChange={handlePriceChange}  required variant='outlined'/>
    <Input label="picture" type='file' handleChange={handlePictureChange} required variant='outlined'/>  
    <Buttons variant="outlined" type="submit" text="Create" color="#FFEE55" background="#242424" border="#FFEE55" />      
    </form>
  </div>
  )};

export default CreateAnnonce;
