import s from './HeaderBottom.module.css'

import {NavLink} from 'react-router-dom'
import { ABOUT_ROUTE, AREAS_ROUTE, CATALOG_ROUTE, CATALOG_ROUTE_NESTED, CONTACTS_ROUTE, DELIVERY_ROUTE, PARTNERS_ROUTE, SELL_ROUTE } from '../../../utils/consts';
import { Container } from '@mui/system';

interface INavItem{
    item: string;
    path: string;
}

const NavMenu: INavItem[] = [
    {
        item: 'About us',
        path: ABOUT_ROUTE,
    },
    {
        item: 'Catalog',
        path: `${CATALOG_ROUTE}/${'all'}`,
    },
    {
        item: 'Areas of activity',
        path: AREAS_ROUTE,
    },
    {
        item: 'Sell equipment',
        path: SELL_ROUTE,
    },
    {
        item: 'Partners',
        path: PARTNERS_ROUTE,
    },
    {
        item: 'Delivery and payment',
        path:  DELIVERY_ROUTE,
    },
    {
        item: 'Contacts',
        path: CONTACTS_ROUTE,
    },
]

const HeaderBottom = (props: any) =>{
    return(
        <div className={s.headerBottom}>
           <Container>
                <nav className={s.headerBottomMenu}>
                    {
                        NavMenu.map(( nav, index) =>
                            <NavLink to={nav.path} key={index} style={({isActive}) => isActive ? {color: "#A4C9FF"} : undefined}>
                                {nav.item}
                            </NavLink>
                    )}
                </nav>
            </Container>
        </div>
    )
}

export default HeaderBottom