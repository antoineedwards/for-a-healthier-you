import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";

export default function Home() {
  const productList = Products;
  return (
    <div styles={{display: 'flex'}}>

      <div classname="product-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem",
      }}>
      {productList.map((product)=>(
        <ProductCard key={product.name} product={product}/>
      ))}
      </div>
    </div>
  )
}
