import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import ProductDescription from "./component/ProductDescription";
import Product from "./component/Product";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setApiData, selectedCatProduct } from "./feature/product";
import { totalDiffrentCategories } from "./feature/category";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
// import {css} from '@emotion/core';
import { jsx } from "@emotion/react";
const loaderCss = jsx`
margin-top:50%;
margin-left:50%;
`;

function App() {
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
    console.log("filter dta ", x);
    dispatch(selectedCatProduct(x));
  };
  useEffect(() => {
    sendToReduxx();
  }, [categorySelected]);

  if (isDataLoaded === false) {
    return (
      <div style={{marginLeft:'50%', marginTop:'10%'}}>
        <BeatLoader loading jsx={loaderCss} size={72} color="red" />
      </div>
    );
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/categories" element={<Product />} />
            <Route
              path="/productdescription/:pid"
              element={<ProductDescription />}
            />
          </Routes>
          {/* <Navigate push to="/" /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
