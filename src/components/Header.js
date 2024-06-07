import { NETFLIX_LOGO } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { SIGNOUT_URL } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { togglegptSearchView } from "../utils/gptSlice";
import { LANGUAGE_SUPPORTED } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
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
    //unsubscribing when the component unmounts
    // return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(togglegptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className="w-screen absolute top-0 bg-gradient-to-b from-black flex justify-between z-20 ">
      <img className="w-44 " alt="netflix-logo" src={NETFLIX_LOGO} />

      {user && (
        <div className="flex p-2">
           { showGptSearch && <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLangChange}   >
            {LANGUAGE_SUPPORTED.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button className="text-white bg-purple-700 px-3 py-3 my-2 mx-4 rounded-lg" onClick={handleGptSearchClick} >
          {showGptSearch ? "Home": "GPT-Search" }
          </button>
          <img className="w-12 h-12 mt-2 " alt="logo" src={SIGNOUT_URL} />
          <button onClick={handleSignOut} className="  font-bold text-white ">
            (Sign out){" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
