import s from './HeaderTop.module.css'
import {Link} from "react-router-dom";

import logo from '../../../assets/images/MainLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import { CART_ROUTE, FAVOURITES_ROUTE, MAIN_ROUTE } from '../../../utils/consts';
import { Container } from '@mui/system';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { useEffect} from 'react';
import { useActions } from '../../../hooks/useActions';
import ProfileModal from '../../Modal/Modal';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../../api/authentificationServiceApi';
import { SingOut } from '../../SignOut/SignOut';

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

    const {shopCartItemsQuantity, favoriteItemsQuantity, isAuth} = useTypeSelector(state => state.userProfile)

    const {fetchUserProfile} = useActions()

    useEffect(()=>{
        const fetchData = async () =>{
            let userId: string | null = localStorage.getItem('userId')
            if(userId)
            {
                fetchUserProfile(userId, true)
            }
        }   
        fetchData()
      }, [])
      
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
                                        <StyledBadge badgeContent={shopCartItemsQuantity} >
                                            <ShoppingCartIcon className={s.iconStyle} />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                            </div>
                            <div className={s.favourites}>
                                <Link to={FAVOURITES_ROUTE}>
                                    <IconButton aria-label="favourites">
                                        <StyledBadge badgeContent={favoriteItemsQuantity}>
                                            <FavoriteIcon className={s.iconStyle} />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                            </div>
                            {
                                isAuth
                                ? <SingOut />
                                : <ProfileModal isAuth={isAuth}/> 
                            }
                        </div>
                    </div>
                </div>
           </Container>
        </div>
    )
}

export default HeaderTop