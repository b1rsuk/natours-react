import style from './logo.module.scss';

function Logo() {
  return (
    <div className={style.logo}>
        <img src="/img/logo-white.png" alt="natours" />
    </div>
  )
}

export default Logo