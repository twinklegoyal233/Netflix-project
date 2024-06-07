
import { useSelector } from "react-redux";
import lang from "./languageConstant";


const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
 
  return (
    <div className="pt-[10%] flex justify-center  ">
      <form className="bg-black w-1/4 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9  rounded-md "
          placeholder={lang[langKey].gptSearchplaceholder}
        />
        <button className="px-8 py-2 col-span-3 m-4  bg-red-500 rounded-lg text-xl ">
        {lang[langKey].search}
        </button>
      </form>

    
    </div>
  );
};

export default GptSearchBar;
