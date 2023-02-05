import s from './HeaderTop.module.css'
import {Link} from "react-router-dom";
import logo from '../../../assets/images/MainLogo.png'
import { ADMIN_PANEL, CART_ROUTE, FAVORITES_ROUTE, MAIN_ROUTE} from '../../../utils/consts';
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
import { SignOut } from '../../SignOut/SignOut';
import { Search } from '../../Search/Search';
import { Box } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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

const HeaderTop = () =>{

    const {isAuth, lastName, firstName,  role} = useTypeSelector(state => state.userProfile)

    const {fetchUserProfile, fetchShopCartEquipments, fetchFavoritesEquipments} = useActions()

    const shopCart = useTypeSelector(state => state.shopCart)
    const favorites = useTypeSelector(state => state.favorites)

    useEffect(()=>{
        const fetchData = async () =>{
            let userId = localStorage.getItem('userId')
            if(userId)
            {
                fetchUserProfile(userId, true)
                fetchShopCartEquipments()
                fetchFavoritesEquipments()
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
                        <Search />
                        <div className={s.headerElements}>
                            <div className={s.cart}>
                                <IconButton aria-label="cart" disabled={!isAuth}>
                                    <Link to={CART_ROUTE}>
                                        <StyledBadge badgeContent={shopCart.total} >
                                            <ShoppingCartIcon className={s.iconStyle} />
                                        </StyledBadge>
                                    </Link>
                                </IconButton>
                            </div>
                            <div className={s.favourites}>
                                <IconButton aria-label="favourites" disabled={!isAuth}>
                                        <Link to={FAVORITES_ROUTE}>
                                            <StyledBadge badgeContent={favorites.total}>
                                                <FavoriteIcon className={s.iconStyle} />
                                            </StyledBadge>
                                        </Link>
                                </IconButton>
                            </div>
                            {
                                role === 'Administrator' && 
                                <IconButton aria-label="cart" disabled={!isAuth}>
                                    <Link to={ADMIN_PANEL}>
                                        <StyledBadge>
                                            <AdminPanelSettingsIcon  className={s.iconStyle} />
                                        </StyledBadge>
                                    </Link>
                                </IconButton>
                            }
                            {
                                isAuth
                                ? <SignOut 
                                    lastName={lastName}
                                    firstName={firstName}
                                    />
                                : <ProfileModal 
                                    isAuth={isAuth}
                                    /> 
                            }
                        </div>
                    </div>
                </div>
           </Container>
        </div>
    )
}

export default HeaderTop