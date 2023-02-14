import { Button } from "./Button";

export function PromoBanner({ banner }) {
  return (
    <div className='promo__banner--container'>
      <div className='spacer'></div>
      <div
        className='promo__banner'
        style={{ backgroundImage: `url(${banner.bgImg})` }}>
        <img src={banner.txtImg} alt='' className='promo__banner--img' />
        <img src={banner.heroImg} alt='' className='promo__banner--hero' />
      </div>
      <div className='promo__banner--content'>
        <div>
          <div className='promo__banner--content--heading'>
            <h2>{banner.featured}</h2>
          </div>

          <p>{banner.tagline}</p>
        </div>

        <div className='btn__container'>
          <Button text={banner.btnText} />
        </div>
      </div>
    </div>
  );
}
