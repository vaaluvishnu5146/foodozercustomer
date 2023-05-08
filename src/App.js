import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import RestaurantDetails from "./Pages/RestaurantDetails";
import routes from "./mocks/routes";

function App() {
  return (
    <div className="app-layout">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} Component={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
