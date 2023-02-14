import icon from "../assets/imgs/ps-icon.svg";
import text from "../assets/imgs/ps-text.svg";
import { NavButton } from "./NavButton";

export function Navbar() {
  return (
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <img src={icon} alt='PlayStation Store Logo' className='icon' />
        <img src={text} alt='PlayStation Store Logo' className='text' />
      </div>

      <div className='navbar__wrapper'>
        <nav className='navbar'>
          <ul>
            <li>
              <NavButton text={"Latest"} />
            </li>
            <li>
              <NavButton text={"Collections"} />
            </li>
            <li>
              <NavButton text={"Deals"} />
            </li>
            <li>
              <NavButton text={"PS5"} />
            </li>
            <li>
              <NavButton text={"Subscriptions"} />
            </li>
            <li>
              <NavButton text={"Browse"} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
