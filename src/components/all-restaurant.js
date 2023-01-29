import "./restaurant.css";

import leftArrow from "./../assets/images/left-arrow.png";
import homeImage from "./../assets/images/home-image.png";
import smallUpArrow from "./../assets/images/small-up-arrow.png";
import smallDownArrow from "./../assets/images/small-down-arrow.png";
import bakedIcon from "./../assets/images/baked.png";
import sweet from "./../assets/images/sweet.png";
import hotDish from "./../assets/images/hot-dish.png";
import fastFoods from "./../assets/images/fast-foods.png";
import itemCart from "./../assets/images/item-cart.png";
import filterIcon from "./../assets/images/filter-icon.png";
import search from "./../assets/images/search.png";
import { useEffect, useState } from "react";
import { MenuTab } from "./menu-tab";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { restaurantDetails } from "../redux/counterSlice";
import Modal from "react-modal";
import { FilterModal } from "./filter-modal";

export default function AllRestaurants() {
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [allRestaurantDataClone, setAllRestaurantDataClone] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Baked");
  const [filterModalEnabled, setFilterModalEnabled] = useState(false);
  const dispatch = useDispatch();
  const [restaurantCuisine, setRestaurantCuisines] = useState();

  const allRestaurantResponse = async () => {
    await fetch(
      "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants"
    )
      .then((response) => response.json())
      .then((data) => {
        // setAllRestaurantData(data.allRestaurants);
        setAllRestaurantDataClone(data.allRestaurants);
        filterData(data.allRestaurants);
        console.log(data.allRestaurants);
      });
  };

  useEffect(() => {
    allRestaurantResponse();
  }, []);

  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const filterData = async (values) => {
    const finalData = values.filter((data, index) => {
      return data.restaurantCategory.includes(selectedCategory);
    });
    setAllRestaurantData(finalData);
  };

  useEffect(() => {
    filterData(allRestaurantDataClone);
  }, [selectedCategory]);

  const customStyles = {
    content: {
      top: "0%",
      left: "70%",
      right: "0%",
      bottom: "0%",
      marginRight: "0%"
    },
  };

  const handleClose = () => {
    setFilterModalEnabled(!filterModalEnabled);
  };

  return (
    <>
      <Modal
        isOpen={filterModalEnabled}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FilterModal handleClose={handleClose} />
      </Modal>
      <div className="d-flex flex-row">
        <div style={{ flex: 0.8, backgroundColor: "#F7F7F7" }}>
          <MenuTab />
        </div>
        <div style={{ flex: 4 }}>
          <div className="d-flex flex-row">
            <div
              className="d-flex flex-row align-items-center"
              style={{ flex: 0.6 }}
            >
              <div className="left-arrow">
                <img src={leftArrow} alt="left-arrow" />
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ marginTop: "44px" }}
            >
              <div>
                <img src={homeImage} alt="home" />
              </div>
              <div className="d-flex da-otto-text align-items-center justify-content-center">
                Da Otto
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  src={smallUpArrow}
                  alt="up"
                  style={{ marginBottom: "4px", marginTop: "6px" }}
                />
                <img src={smallDownArrow} alt="down" />
              </div>
            </div>
            <div
              className="d-flex align-items-start justify-content-center"
              style={{ flex: 1 }}
            >
              <div className="magnifying-glass">
                <img
                  src={search}
                  alt="search"
                  style={{ marginRight: "12px", marginLeft: "16px" }}
                />
                <input
                  type={"text"}
                  placeholder="Search for Restaurants  (Press Enter to search)"
                  className="input-box"
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <div
                className="d-flex flex-row align-items-center justify-content-end"
                onClick={() => setFilterModalEnabled(true)}
              >
                <div className="filter-icon">
                  <img src={filterIcon} alt="item-cart" />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-end">
                <div className="item-cart">
                  <img src={itemCart} alt="item-cart" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center category-text">
            Category
          </div>
          <div className="d-flex flex-row category-items">
            <div className="d-flex align-items-center" style={{ flex: 1 }}>
              <div
                className={`${
                  selectedCategory === "Baked" && "category-active"
                } d-flex flex-row`}
                onClick={() => setSelectedCategory("Baked")}
              >
                <div className="d-flex align-items-center images-text-spacing">
                  <img src={bakedIcon} alt="baked" />
                </div>
                <div
                  className={`${
                    selectedCategory === "Baked"
                      ? "category-items-text-active"
                      : "category-items-text"
                  } d-flex align-items-center`}
                >
                  Baked
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center" style={{ flex: 1 }}>
              <div
                className={`${
                  selectedCategory === "Sweet" && "category-active"
                } d-flex flex-row`}
                onClick={() => setSelectedCategory("Sweet")}
              >
                <div className="d-flex align-items-center images-text-spacing">
                  <img src={sweet} alt="sweet" />
                </div>
                <div
                  className={`${
                    selectedCategory === "Sweet"
                      ? "category-items-text-active"
                      : "category-items-text"
                  } d-flex align-items-center`}
                >
                  Sweet
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ flex: 1 }}>
              <div
                className={`${
                  selectedCategory === "Hot Dish" && "category-active"
                } d-flex flex-row`}
                onClick={() => setSelectedCategory("Hot Dish")}
              >
                <div className="d-flex align-items-center images-text-spacing">
                  <img src={hotDish} alt="hot-dish" />
                </div>
                <div
                  className={`${
                    selectedCategory === "Hot Dish"
                      ? "category-items-text-active"
                      : "category-items-text"
                  } d-flex align-items-center`}
                >
                  Hot Dish
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center" style={{ flex: 1 }}>
              <div
                className={`${
                  selectedCategory === "Fast Food" && "category-active"
                } d-flex flex-row`}
                onClick={() => setSelectedCategory("Fast Food")}
              >
                <div className="d-flex align-items-center images-text-spacing">
                  <img src={fastFoods} alt="fast-foods" />
                </div>
                <div
                  className={`${
                    selectedCategory === "Fast Food"
                      ? "category-items-text-active"
                      : "category-items-text"
                  } d-flex align-items-center`}
                >
                  Fast Food
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center" style={{ flex: 1 }}>
              <div
                className={`${
                  selectedCategory === "Salads" && "category-active"
                } d-flex flex-row`}
                onClick={() => setSelectedCategory("Salads")}
              >
                <div className="d-flex align-items-center images-text-spacing">
                  <img src={fastFoods} alt="salads" />
                </div>
                <div
                  className={`${
                    selectedCategory === "Salads"
                      ? "category-items-text-active"
                      : "category-items-text"
                  } d-flex align-items-center`}
                >
                  Salads
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ flex: 1 }}></div>
            <div className="d-flex" style={{ flex: 1 }}></div>
          </div>
          <div className="d-flex restaurant-text">Restaurants</div>

          {arrayChunk(allRestaurantData, 3).map((row, i) => (
            <div className="d-flex flex-row row-mapping-first">
              {row.map((data) => {
                return (
                  <>
                    <Link
                      to={"/restaurantDetails"}
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <div
                        className="d-flex mapping-first-outer max-width-div"
                        style={{ flex: 1 }}
                        onClick={() =>
                          dispatch(
                            restaurantDetails({
                              restaurantImage: data.restaurantImage,
                              restaurantName: data.restaurantName,
                              isOpen: data.isOpen,
                              restaurantDescription: data.restaurantDescription,
                            })
                          )
                        }
                      >
                        <div className="d-flex flex-column">
                          <img
                            src={data.restaurantImage}
                            alt="down"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "auto",
                              height: "200px",
                              borderRadius: "16px",
                              marginBottom: "16px",
                              marginright: "16px",
                            }}
                          />
                          <div
                            className="d-flex flex-row align-items-start justify-content-start"
                            style={{ marginBottom: "12px" }}
                          >
                            <div
                              className="d-flex restaurant-name-tab"
                              style={{ flex: 1 }}
                            >
                              {data.restaurantName}
                            </div>
                            <div
                              className={`${
                                data.isOpen === true
                                  ? "restaurant-open"
                                  : "restaurant-closed"
                              } d-flex align-items-center justify-content-end`}
                            >
                              {data.isOpen === true ? "Open Now" : "Closed"}
                            </div>
                          </div>
                          <div className="d-flex flex-wrap" style={{ flex: 1 }}>
                            {data.restaurantDescription}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
