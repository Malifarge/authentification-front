import Card from "../Card";
import SideBar from "../SideBar";
import { Button } from "@mui/material";

const Annonce = ({ product, products }) => {
  return (
    <>
      <SideBar />
      <div>
        <h1>{product.productPrice}$</h1>
        <h2>{product.productName}</h2>
      </div>
      <div>
        <span>{product.productDescription}</span>
      </div>
      <Button> SEND A MESSAGE</Button>
      <div>
        <h3>TITLE PRODUCTE</h3>
        <div>
          {products.map((product) => {
            return <Card product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Annonce;
