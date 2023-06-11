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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleCallAPIproduct } from "./redux/reducer/productSlice";
import Carforsale from "./component/Carforsale/Carforsale";
import Consignment from "./component/Consignment/Consignment";
import Adminuser from "./component/Adminuer/Adminuser";
import Adminproduct from "./component/Adminproduct/Adminproduct";
import { handleGetAllUsers } from "./redux/reducer/useSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetProducts = async () => {
      await dispatch(handleCallAPIproduct()).unwrap();
    };
    handleGetProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" index element={<HomeComponent />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="sellcar" element={<Buycar />} />
          <Route path="buycar" element={<Sellcar />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="onsale" element={<Carforsale />} />
          <Route path="consignment" element={<Consignment />} />
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route path="adminuser" element={<Adminuser />} />
          <Route path="productmanager" element={<Adminproduct />} />
        </Route>
        <Route path="/Login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponen />} />
        <Route path="/uploadimg" element={<Uploadimg />} />
      </Routes>
    </div>
  );
}

export default App;
