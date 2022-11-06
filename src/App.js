import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ShopNow from "./pages/ShopNow";
import TheChef from "./pages/TheChef";
import Users from "./pages/user";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { ErrorBoundary } from "./components/ErrorBoundary";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavLink exact to="/">
          <span></span>Home
        </NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="ShopNow" element={<ShopNow />} />
          <Route path="Login" element={<Login />} />
          <Route path="TheChef" element={<TheChef />} />
          <Route path="Profile" element={<Profile />} />
          <Route
            path="/users"
            element={
              <ErrorBoundary>
                <Users />{" "}
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
