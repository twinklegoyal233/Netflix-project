import { NETFLIX_LOGO } from "../utils/constant"

const Header = () => {
  return (
    <div>
      <img  className="w-44 absolute top-0 bg-gradient-to-r from-black "  alt="netflix-logo"  src= {NETFLIX_LOGO} />
    </div>
  )
}

export default Header
