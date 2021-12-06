import React, { useState, useEffect } from "react";
import "../style/header.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setApiData, selectedCatProduct } from "../feature/product";
import { totalDiffrentCategories } from "../feature/category";
import { Link, NavLink } from "react-router-dom";
import { catSlider } from "../sliderProperty/sliderSetting";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";

const Header = () => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCatedgory] = useState("all");

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dispatch = useDispatch();

  const getApicall = async () => {
    try {
      const resp = await axios.get(`https://fakestoreapi.com/products/`);
      let catArray = [];
      resp.data.map((cItem) => {
        return catArray.push(cItem.category);
      });
      setCategoryData([...new Set(catArray), "all"]);
      setProductData(resp.data);
      dispatch(setApiData(resp.data));
      dispatch(totalDiffrentCategories([...new Set(catArray)]));
      setIsDataLoaded(true);
    } catch (er) {
      alert("some thing wrong here1", er);
    }
  };

  useEffect(() => {
    getApicall();
  }, []);

  const categorySelected = (cat) => {
    setSelectedCatedgory(cat);
  };

  const sendToReduxx = () => {
    let x = productData
      .filter((prod) => {
        if (selectedCategory == "all") {
          return prod;
        } else if (prod.category == selectedCategory) {
          return prod;
        }
      })
      .map((cItem) => {
        return cItem;
      });
    dispatch(selectedCatProduct(x));
  };
  useEffect(() => {
    sendToReduxx();
  }, [categorySelected]);

  if (isDataLoaded === false) {
    return (
      <div style={{ marginLeft: "50%", marginTop: "10%" }}>
        <BeatLoader loading  size={72} color="red" />
      </div>
    );
  }

  return (
    <>
      <div className="">
        <p className="top text-center py-1">
          <span>
            <i className="far fa-truck"></i>
          </span>
          best selling product
        </p>
      </div>
      <div className="fullDeviceWidth">
        <div className="col-sm-12 col-md-12 col-lg-9 mx-auto">
          <div className="container">
            <div className="row">
              <div className="fullWidth">
                <div className="appbars d-flex justify-content-between pb-2">
                  <div className="formAction ">
                    <form action="" className="d-flex">
                      {/* <div className=" searchAction flex-row-reverse"> */}
                      <button
                        className="serchBtn"
                        type="submit"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="far fa-search"></i>
                      </button>
                      <input
                        className="searchField"
                        placeholder="search here"
                        type="search"
                        name=""
                        id=""
                      />

                      {/* </div> */}
                    </form>
                  </div>

                  <Link to="/" className="text-decoration-none">
                    <h5 className="brandNam">Ecommerce store</h5>
                  </Link>
                  <div className="userActions d-flex justify-content-between">
                    <span>
                      <i className="fal fa-user"></i>
                    </span>
                    <span>
                      <i className="far fa-heart"></i>
                    </span>

                    <div>
                      <span>
                        <i className="fal fa-shopping-bag bag"></i>
                        <div className="cartItem">
                          <span className="cartNum">1</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* up is bootstrap */}
      <div className="col-sm-12 col-md-12 col-lg-9 mx-auto">
        <div className="container">
         
          <Slider {...catSlider} className="text-decoration-none">
            {categoryData.map((cItem, i) => {
              return (
                <NavLink
                  to="/categories"
                  className="catNav"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h6
                    className="catTitle mx-3 text-capitalize text-decoration-none pt-3"
                    onClick={() => categorySelected(cItem)}
                    key={i}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {cItem}
                  </h6>
                </NavLink>
              );
            })}
          </Slider>
         
        </div>
      </div>
    </>
  );
};

export default Header;
