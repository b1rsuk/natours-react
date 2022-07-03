import style from './title.module.scss'
import Button from './Button/Button'

function Title() {
  return (
    <div className={style.container}>
        <h1 className={style.title}>
            <span className={style.outdoors}>Outdoors</span>
            <span className={style.comment}>is where life happens</span>
        </h1>
        <Button/>
    </div>
  )
}

export default Title