import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  //since the above searchQuery is making api call on every key press which we don't want so we will apply debouncing on the api call in useEffect coz we make api calls inside useEffect only. and we have to apply debouncing everytime my searchQuery changes //
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();
    console.log(json);

    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  //we will dispatch an action here using a hook that is coming from react-redux naming useDispatch//

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          onClick={toggleMenuHandler}
          className="cursor-pointer"
        />

        <a>
          <FaYoutube className="mx-2 bg-red-600 text-neutral-300 rounded-sm" />
        </a>
      </div>

      <div className="col-span-10 text-center ">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-400 w-1/2 p-2 rounded-l-full "
          />
          <button className="border border-gray-400 p-3 py-3 my-3 bg-gray-100  rounded-r-full">
            <FaSearch />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] rounded-lg shadow-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-5 shadow-sm border border-gray-100  hover:bg-gray-100 "
                >
                  <FaSearch />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <FaRegUser />
      </div>
    </div>
  );
};

export default Head;
