import React, { useState } from 'react';
import { NETFLIX_LOGO } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { SIGNOUT_URL } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AiOutlineDown } from 'react-icons/ai'; // Import for down arrow icon

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  return (
    <div className="w-screen absolute top-0 bg-gradient-to-b from-black flex justify-between z-20  ">
      <img className="w-36 xl:w-44 ml-2 md:ml-0 " alt="netflix-logo" src={NETFLIX_LOGO} />
      {user && ( // Only render dropdown if user is logged in
        <div className="flex items-center mr-30 relative">
          <button onClick={toggleDropdown} className="focus:outline-none flex items-center">
            <img className="w-10 h-10 xl:w-12 xl:h-12 cursor-pointer mr-2" alt="profile" src={SIGNOUT_URL} />
            {isDropdownOpen ? (
              <AiOutlineDown className="text-white text-xl" />
            ) : (
              <AiOutlineDown className="text-white text-xl opacity-50" /> // Adjust opacity for visual cue
            )}
          </button>
          {isDropdownOpen && ( // Conditionally render dropdown content
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-md overflow-hidden z-50">
              <button onClick={handleSignOut} className="text-left py-2 px-4 hover:bg-gray-200">
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
