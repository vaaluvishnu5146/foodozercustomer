import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotificationContainer } from "react-notifications";
import { routes, authRoutes } from "./mocks/routes";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.authentication);
  return (
    <div className="app-layout">
      <NotificationContainer />
      <Routes>
        {user && user._id
          ? routes.map((route, i) => (
              <Route
                key={`app-routes-${route.id}-${i}`}
                path={route.path}
                Component={route.component}
              />
            ))
          : authRoutes.map((route, i) => (
              <Route
                key={`auth-routes-${route.id}-${i}`}
                path={route.path}
                Component={route.component}
              />
            ))}
      </Routes>
    </div>
  );
}

export default App;
