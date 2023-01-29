import "./restaurant.css";
import leftArrow from "./../assets/images/left-arrow.png";
import itemCart from "./../assets/images/item-cart.png";
import clockIconSmall from "./../assets/images/clock-icon-small.png";
import worldLogo from "./../assets/images/world-logo.png";
import phoneImage from "./../assets/images/phone.png";
import { useEffect, useLayoutEffect, useState } from "react";
import { MenuTab } from "./menu-tab";
import { useSelector } from "react-redux";
import { Modal } from "react-modal";

export function RestaurantDetails() {
  const [allRestaurantDetails, setAllRestaurantDetails] = useState([]);
  const [singleRestaurantDetails, setSingleRestaurantDetails] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [menuItemsClone, setMenuItemsClone] = useState([]);
  const [menuItemsCategory, setMenuItemsCategory] = useState("All");
  const restaurantDetailsSelector = useSelector((state) => state.counter.dataValues);
  const [count, setCount] = useState({baked: 0, sweet: 0, hotDish: 0, all:0})

  const restaurantDetailsResponse = async () => {
    await fetch(
      "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails"
    )
      .then((response) => response.json())
      .then((data) => {setAllRestaurantDetails(data.restaurantDetails); console.log("data for all", data.restaurantDetails); getSingleRestaurantDetails(data.restaurantDetails);});
  };

  const menuItemsResponse = async () => {
    await fetch(
      "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu"
    )
      .then((response) => response.json())
      .then((data) => {setMenuItems(data.menu); setMenuItemsClone(data.menu);console.log("data menu", data.menu); filterData(data.allRestaurants);});
  };

  useLayoutEffect(() => {
    restaurantDetailsResponse();
    menuItemsResponse();
  }, []);

  const getSingleRestaurantDetails = (values) => {
    const singleRestaurantData = values.filter((data) => {
      if (data.restaurantName === restaurantDetailsSelector.restaurantName){
        return data;
      }
    });
    setSingleRestaurantDetails(singleRestaurantData[0]);
  }

  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const filterData = async (values) => {
    let allCount = values.length, bakedCount = 0, sweetCount = 0, hotDish = 0;
    const finalData = values.filter((data, index) => {
      if(menuItemsCategory === 'All'){
        return data.restaurantName.includes(restaurantDetailsSelector.restaurantName);
      } else {
        return data.itemCategory.includes(menuItemsCategory) && data.restaurantName.includes(restaurantDetailsSelector.restaurantName);
      }
    });
    finalData.forEach((data, index) => {
      if(data.itemCategory === "Baked")
        bakedCount++;
      if(data.itemCategory === "Hot Dish")
        hotDish++;
      if(data.itemCategory === "Sweet")
        sweetCount++
    })
    setCount({baked: bakedCount, sweetCount: sweetCount, hotDish: hotDish, all: allCount});
    setMenuItems(finalData);
  };

  useEffect(() => {
    filterData(menuItemsClone);
  }, [menuItemsCategory]);
  
  return (
    <>
    
      <div className="d-flex flex-row">
        <div style={{ flex: 0.8, backgroundColor: "#F7F7F7" }}>
          <MenuTab />
        </div>
        <div style={{ flex: 4 }}>
          <div className="d-flex flex-row align-items-center">
            <div
              className="d-flex flex-row align-items-center"
              style={{ flex: 1 }}
            >
              <div className="left-arrow align-items-center">
                <img src={leftArrow} alt="left-arrow" />
              </div>
            </div>
            <div
              className="d-flex flex-row align-items-center justify-content-end"
              style={{ flex: 1 }}
            >
              <div className="item-cart">
                <img src={itemCart} alt="item-cart" />
                <div className="overlay">2</div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row align-items-start">
            <div
              className="d-flex flex-row align-items-center"
              style={{ flex: 1 }}
            >
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center restaurant-name">
                  {restaurantDetailsSelector.restaurantName}
                </div>
                <div className="d-flex flex-wrap align-items-center restaurant-description">
                  {restaurantDetailsSelector.restaurantDescription}
                </div>
                <div className="d-flex flex-row align-items-center bottom-margin-details">
                  <div className="d-flex align-items-center">
                    <img
                      src={clockIconSmall}
                      alt="clockIcon"
                      className="small-images"
                    />
                  </div>
                  <div className="d-flex flex-column align-items-center small-images-text">
                    <div className="d-flex align-items-center">
                      {singleRestaurantDetails !== undefined && (singleRestaurantDetails.openingHours.split(",")[0])}
                    </div>
                    <div className="d-flex align-items-center">
                      {singleRestaurantDetails !== undefined && (singleRestaurantDetails.openingHours.split(",")[1])}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center bottom-margin-details">
                  <div className="d-flex align-items-center">
                    <img
                      src={phoneImage}
                      alt="clockIcon"
                      className="small-images"
                    />
                  </div>
                  <div className="d-flex align-items-center small-images-text">
                    {singleRestaurantDetails !== undefined && singleRestaurantDetails.contactNumber}
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center bottom-margin-details">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={worldLogo}
                      alt="clockIcon"
                      className="small-images"
                    />
                  </div>
                  <div className="d-flex align-items-center small-images-text">
                    {singleRestaurantDetails !== undefined && singleRestaurantDetails.websiteUrl}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-row align-items-center justify-content-center"
              style={{ flex: 1 }}
            >
              <img
                src={restaurantDetailsSelector.restaurantImage}
                alt="restaurantimage"
                width="90%"
                className="restaurant-image align-items-center justify-content-center"
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center menu-tabs">
            <div className={`${menuItemsCategory === "All" ? "menu-css-active" : "menu-css"} align-items-center justify-content-center`} onClick={() => setMenuItemsCategory("All")}>
              All ({count.all})
            </div>
            <div className={`${menuItemsCategory === "Baked" ? "menu-css-active" : "menu-css"} align-items-center justify-content-center`} onClick={() => setMenuItemsCategory("Baked")}>
              Baked ({count.baked})
            </div>
            <div className={`${menuItemsCategory === "Sweet" ? "menu-css-active" : "menu-css"} align-items-center justify-content-center`} onClick={() => setMenuItemsCategory("Sweet")}>
              Sweet ({count.sweet})
            </div>
            <div className={`${menuItemsCategory === "Hot Dish" ? "menu-css-active" : "menu-css"} align-items-center justify-content-center`} onClick={() => setMenuItemsCategory("Hot Dish")}>
              Hot Dish ({count.hotDish})
            </div>
          </div>
          <div className="d-flex menu-text align-items-center">Menu</div>
          {arrayChunk(menuItems, 3).map((row, i) => (
            <div className="d-flex flex-row align-items-center">
              {row.map((data) => {
                return (
                  <>
                    <div
                      className="d-flex flex-column justify-content-center mapping-second-outer max-width-div"
                      style={{ flex: 1 }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={data.itemPhoto}
                          alt="menuImage"
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
                      </div>
                      <div className="d-flex flex-row">
                        <div
                          className="d-flex align-items-start justify-content-start item-name flex-wrap"
                          style={{ flex: 1 }}
                        >
                          {data.itemName}
                        </div>
                        <div className="d-flex align-items-end justify-content-end item-cost flex-wrap">
                          £{data.itemCost}
                        </div>
                      </div>
                    </div>
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
