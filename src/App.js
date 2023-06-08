import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./page/Admin/AdminPage";
import HomePage from "./page/Home/HomePage";
import LoginComponent from "./component/Login/LoginComponent";
import RegisterComponen from "./component/Register/RegisterComponen";
import Introduce from "./component/Introduce/Introduce";
import HomeComponent from "./component/HomeComponent/HomeComponent";
import Uploadimg from "./component/Uploadimg/Uploadimg";
import Sellcar from "./component/Sellcar/Sellcar";
import Buycar from "./component/Buycar/Buycar";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart";
import Details from "./component/Detail/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" index element={<HomeComponent />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="sellcar" element={<Buycar />} />
          <Route path="buycar" element={<Sellcar />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/admin" index element={<AdminPage />} />
        <Route path="/Login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponen />} />
        <Route path="/uploadimg" element={<Uploadimg />} />
      </Routes>
    </div>
  );
}

export default App;
