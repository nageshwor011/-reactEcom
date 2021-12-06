import React from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import '../style/productDescription.css';


const ProductDescription = () => {
  const selector = useSelector((state) => state);
  let { pid } = useParams();

  return (
    <div className="col-sm-12 col-md-10 col-lg-9 mx-auto">
      <div className="container">
        <div className="row">
          {selector.product.products.map((pData) => {
            const {
              id,
              image,
              title,
              category,
              price,
              description,
              rating: { rate },
            } = pData;
            if (id == pid) {
              return (
                <>
                  <div className="col-lg-6 col-md-6 col-sm-12 img">
                    <div className="imgContainer">
                    <img
                      src={image}
                      className="productImage"
                      alt=""
                      sizes=""
                      srcset=""
                      style={{width:"100%", height:"350px", objectFit: "contain"}}
                    />
                    </div>
                   
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="text-muted">
                      <h5>{title} </h5>
                      <p>
                        by <span className="text-danger">{category}</span>
                      </p>
                    </div>
                    <div className="d-flex ">
                      <h5>Rs {price}</h5>
                      <span className="rating mx-2" style={{marginTop:'-5px'}}>
                        <ReactStars
                          count={5}
                          size={20}
                          isHalf={true}
                          edit={false}
                          value={rate}
                          activeColor={"orange"}
                        />
                      </span>
                     
                    </div>
                    <div className="pr">
                    <p className="text-muted">
                        avaliable -{" "}
                        <span className="text-success">In Stock</span>
                      </p>
                    </div>
                    <div className="description">
                      <p>{description}</p>
                    </div>
                    <div>
                      <h6 className="text-muted">
                        {" "}
                        <span>
                          <i class="fal fa-shopping-cart"></i>
                        </span>{" "}
                        free shiping
                      </h6>
                      <h6 className="text-muted">
                        {" "}
                        <span>
                          <i class="fal fa-dollar-sign"></i>
                        </span>{" "}
                        EMI option Avaliable
                      </h6>
                    </div>
                    <div className="colorDiv">
                      <hr />
                      <p>Colors</p>
                      <hr />
                    </div>
                    <div className="view">
                      <button className="btn btn-danger m-3">
                        <span>
                          {" "}
                          <i class="fal fa-shopping-cart"></i>
                        </span>{" "}
                        View in cart{" "}
                      </button>
                      <button className="btn btn-outline-dark  m-3">
                        <span>
                          {" "}
                          <i class="fal fa-heart"></i>
                        </span>{" "}
                        wish list{" "}
                      </button>
                      <button className="btn btn-outline-dark m-3">
                        <span>
                          {" "}
                         <i class="fas fa-share-alt"></i>
                        </span>{" "}
                        share{" "}
                      </button>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
