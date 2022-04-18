import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Navbar/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Navbar/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route
          path="/Checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
