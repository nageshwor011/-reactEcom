import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import  "../style/product.css";

const Product = () => {
  const productsDisplay = useSelector((state) => state);
  
 
  return (
    <>
      <div className="col-sm-12 col-md-10 col-lg-9 mx-auto">
        <div className="container">
          <div className="row">
            {productsDisplay.product.selectedCategory.products.map(
              (productData, i) => {
                const { image, title,id } = productData;
                return (
                  <div
                    className="card col-sm-10 col-md-6 col-lg-3 gy-3"
                    style={{ width: "100%" }}
                    key={i}
                  >
                    <Link to={`/productdescription/${id}`} style={{textDecoration:'none', color:'black'}}>
                    <div className="mainIMageContainer ">
                      <div className="productImg p-2">
                        <img
                          src={image}
                          alt="..."
                          className=""
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>

                    <div class="card-body">
                      <p class="card-text">{title}</p>
                    </div>
                   </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
