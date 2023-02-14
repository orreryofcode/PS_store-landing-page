import { Button } from "./Button";
import icon from "../assets/imgs/ps-icon.svg";
import text from "../assets/imgs/ps-text.svg";

export function Navbar() {
  return (
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <img src={icon} alt='' className='icon' />
        <img src={text} alt='' className='text' />
      </div>

      <div className='navbar__wrapper'>
        <nav className='navbar'>
          <ul>
            <li>
              <Button />
            </li>
            <li>
              <Button />
            </li>
            <li>
              <Button />
            </li>
            <li>
              <Button />
            </li>
            <li>
              <Button />
            </li>
            <li>
              <Button />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
