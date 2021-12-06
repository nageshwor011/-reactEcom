import "../style/home.css";
import { useSelector } from "react-redux";
import "../style/home.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { settings } from "../sliderProperty/sliderSetting";

const Home = () => {
  const selector = useSelector((state) => state);
  const categories = selector.categories.categories;
  const product = selector.product.products;

  return (
    <>
      <div className="col-sm-12 col-md-10 col-lg-9 mx-auto">
        <div className="container">
          {categories.map((catData, i) => {
            return (
              <>
                <div className="col-12">
                  <h5
                    className="text-center text-capitalize mt-2 py-4 catName"
                    key={i}
                  >
                    {catData}
                  </h5>
                </div>

                <Slider {...settings}>
                  {product
                    .filter((prod) => prod.category === catData)
                    .map((cItem) => {
                      return (
                        <Link
                          to={`/productdescription/${cItem.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="card p-3">
                            <div>
                              <div key={cItem.id}>
                                <div className=" mainIMageContainer px-2 py-2">
                                  <img
                                    src={cItem.image}
                                    class="productImg"
                                    alt="..."
                                    style={{
                                      objectFit: "containe",
                                      width: "100%",
                                    }}
                                  />
                                </div>
                                <div style={{ height: "80px" }}>
                                  <p
                                    class="card-text pTitle"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  >
                                    {cItem.title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </Slider>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
