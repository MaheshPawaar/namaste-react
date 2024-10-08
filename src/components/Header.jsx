import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO_URL from '../utils/constants';
import UserContext from '../utils/UserContext';
import useOnlineStatus from '../utils/useOnlineStatus';

const Title = () => {
  return (
    <Link to="/">
      <img className="w-48" src={LOGO_URL} alt="logo" />
    </Link>
  );
};

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <Title />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to='/cart'>Cart - {cartItems.length}</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
