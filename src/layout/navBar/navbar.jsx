import NavBarListItem from "./navBarListItem";
import { navItemsLeft, navitemsRight } from "./navItem";


const Navbar = () => {
  return (
    <nav className="h-16 bg-tmdbDarkBlue flex text-white">
      <NavBarListItem items={navItemsLeft}/>
      <NavBarListItem items={navitemsRight}/>
    </nav>
  )
}

export default Navbar