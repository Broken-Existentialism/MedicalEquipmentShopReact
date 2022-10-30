import s from './HeaderTop.module.css'
import {Link} from "react-router-dom";

import logo from '../../../assets/images/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { CART_ROUTE, FAVOURITES_ROUTE, MAIN_ROUTE } from '../../../utils/consts';
import { Container } from '@mui/system';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';


const StyledBadge = styled(Badge)<BadgeProps>({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: '2px solid #fff',
    padding: '0 4px',
    backgroundColor: '#A4C9FF',
    color: '#fff',
  },
});

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
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} >
                                                <ShoppingCartIcon className={s.iconStyle} />
                                            </StyledBadge>
                                        </IconButton>
                                    </Link>
                                </div>

                                <div className={s.favourites}>
                                    <Link to={FAVOURITES_ROUTE}>
                                       <IconButton aria-label="favourites">
                                            <StyledBadge badgeContent={4}>
                                                <FavoriteIcon className={s.iconStyle} />
                                            </StyledBadge>
                                        </IconButton>
                                    </Link>
                                </div>

                                <div className={s.login}>
                                     <IconButton aria-label="login">
                                        <LoginOutlinedIcon className={s.iconStyle}/>
                                    </IconButton>
                                </div>
                        </div>
                        
                    </div>

                </div>
           </Container>
        </div>
    )
}

export default HeaderTop