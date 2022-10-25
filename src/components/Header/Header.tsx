import s from './Header.module.css'
import HeaderBottom from './HeaderBottom/HeaderBottom'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () =>{
    return(
        <header className={s.headerContainer}>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}

export default Header