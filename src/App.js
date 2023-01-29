import AllRestaurants from "./components/all-restaurant";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RestaurantDetails } from "./components/restaurant-details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<AllRestaurants />} />
          <Route path="/restaurantDetails" element={<RestaurantDetails />} />
          <Route path="*" element={<AllRestaurants />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
