import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    return (
      <div className="col-md-3 mb-3 product-block" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="card">
            <div className="card-body">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                />
              </div>
              <h6>{product.title}</h6>
              <p>${product.price}</p>
              <p>{product.category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
