import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./page/Admin/AdminPage";
import HomePage from "./page/Home/HomePage";
import LoginComponent from "./component/Login/LoginComponent";
import RegisterComponen from "./component/Register/RegisterComponen";
import Introduce from "./component/Introduce/Introduce";
import HomeComponent from "./component/HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" index element={<HomeComponent />} />
          <Route path="introduce" element={<Introduce />} />
        </Route>
        <Route path="/admin" index element={<AdminPage />} />
        <Route path="/Login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponen />} />
      </Routes>
    </div>
  );
}

export default App;
