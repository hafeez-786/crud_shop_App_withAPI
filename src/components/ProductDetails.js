import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/action/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { price, title, image, category, description } = product;
  const { productId } = useParams();
  console.log("productDetails....", product);
  const dispatch = useDispatch();

  const fecthProductsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("details error__", err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fecthProductsDetails();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className="row" style={{marginTop: "4rem"}}>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="col-md-4">
            <img src={image} alt={title} className="img-fluid"/>
          </div>
          <div className="col-md-8">
             <h2 className="mb-4">Product Information</h2>
             <h5>{title}</h5>
             <p><strong>Price:</strong> ${price}</p>
             <p><strong>Category:</strong> {category}</p>
             <p><strong>Description:</strong> {description}</p>
             <button className="btn btn-warning">Add to cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
