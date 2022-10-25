import s from './HeaderTop.module.css'
import {Link} from "react-router-dom";

import logo from '../../../assets/images/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { CART_ROUTE, FAVOURITES_ROUTE, MAIN_ROUTE } from '../../../utils/consts';
import { Container } from '@mui/system';

const HeaderTop = (props: any) =>{
    return(
        <div className={s.headerTop}>
            <Container> 
                <div className={s.headerTopBlock}>

                    <Link to={MAIN_ROUTE} className={s.headerLogo} >
                            <img className={s.logoImage} src={logo} alt="Error"/>
                    </Link>  

                    <div className={s.headerMain}>
                        <div className={s.headerSearch}>
                                <form className={s.formBlock}>
                                    <input type="text" placeholder="TYPE YOUR QUERY..." />
                                    <button type="submit">
                                        <SearchIcon sx={{ color: 'white', fontSize: 40 }} />
                                    </button>
                                </form>
                        </div>
                        <div className={s.headerElements}>
                                <div className={s.cart}>
                                    <Link to={CART_ROUTE}>
                                        <AddShoppingCartOutlinedIcon className={s.iconStyle} />
                                    </Link>
                                    <span>0</span>
                                </div>
                                <div className={s.favourites}>
                                    <Link to={FAVOURITES_ROUTE}>
                                        <FavoriteBorderIcon className={s.iconStyle} />
                                    </Link>
                                    <span>0</span>
                                </div>
                                <div className={s.login}>
                                    <LoginOutlinedIcon className={s.iconStyle}/>
                                </div>
                        </div>
                    </div>

                </div>
           </Container>
        </div>
    )
}

export default HeaderTop