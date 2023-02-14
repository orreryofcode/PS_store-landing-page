import bg from "../assets/imgs/game_art/hogwarts__bg.jpg";
import logo from "../assets/imgs/game_art/hogwarts__logo.svg";
import { Button } from "./Button";

export function PromoBanner() {
  return (
    <div className='promo__banner--container'>
      <div className='spacer'></div>
      <div className='promo__banner' style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} alt='' className='promo__banner--img' />
      </div>
      <div className='promo__banner--content'>
        <div>
          <div className='promo__banner--content--heading'>
            <h1>Hogwarts Legacy</h1>
          </div>

          <p>Your legacy is what you make of it. Live the Unwritten.</p>
        </div>

        <Button />
      </div>
    </div>
  );
}
