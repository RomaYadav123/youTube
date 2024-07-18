import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  //now in order to read from the store we have to subscribe to the store using the hook useSelector & inside that we will have to use what we have written inside the initialState & inside that hook you need to specify exactly at what portion of your store you want to subscribe to//
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern ie., if isMenu will be false then you are returing null else whatever is written from line 10 will be returned//
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
