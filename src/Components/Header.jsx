import { useState } from "react";
import logo from "../img/logo.png";

const Title = () => (
  <a href="/">
    <img
      className="w-20 h-auto"
      src={logo}
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>
);

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="bg-gray-900 text-white py-4 flex items-center justify-between px-4">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fas fa-shopping-cart"></i>
          </li>
          <li>
            {isLoggedin ? (
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setIsLoggedin(true)}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
