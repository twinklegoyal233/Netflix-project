import { NETFLIX_LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { SIGNOUT_URL } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleSignOut = () => {
    signOut(auth).then(() => {
        dispatch(removeUser());
      }).catch((error) => {
        navigate("/error")
      });
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          navigate("/browse")
        } else {
          dispatch(removeUser());
            navigate("/")
        }
        return () => unsubscribe();
      });
      //unsubscribing when the component unmounts
      // return () => unsubscribe();
    }, []);
  return (
    <div className="w-screen absolute top-0 bg-gradient-to-b from-black flex justify-between ">
      <img className="w-44 " alt="netflix-logo" src={NETFLIX_LOGO} />

      <div className="flex">
        <img className="w-12 h-12 mt-2 " alt="logo" src={SIGNOUT_URL}  />
    <button  onClick={handleSignOut} className="  font-bold text-white ">(Sign out) </button>
      </div>
    </div>
  );
};

export default Header;
