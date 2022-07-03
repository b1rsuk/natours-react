import style from './buttonWhite.module.scss'
import buttonStyle from '../button.module.scss';

function ButtonWhite(props: {children: string}) {

    const classList: string[] = [
        style.button,
        buttonStyle.button,
        buttonStyle.animation
    ]

    return (
        <a href='#' className={classList.join(' ')}>{props.children}</a>
    )
}

export default ButtonWhite