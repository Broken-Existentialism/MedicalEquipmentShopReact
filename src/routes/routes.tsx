import {ReactElement } from "react";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import Contacts from "../pages/Contacts/Contacts";
import { Favorites } from "../pages/Favorites/Favorites";
import MainPage from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import ShopCart from "../pages/ShopCart/ShopCart";
import { ABOUT_ROUTE, CART_ROUTE, 
        CATALOG_ROUTE_NESTED, CONTACTS_ROUTE, 
        EQUIPMENT_ROUTE_NESTED, FAVORITES_ROUTE,
        MAIN_ROUTE, 
        NOTFOUND_ROUTE, REGISTER_ROUTE } from "../utils/consts";
import EquipmentInfo from "../pages/EquipmentInfo/EquipmentInfo";

interface IRoute{
    path: string;
    component: ReactElement;
}

export const authRoutes: IRoute[] = [
    {
        path: MAIN_ROUTE,
        component: <MainPage />,
    },
    {
        path: CATALOG_ROUTE_NESTED,
        component: <Catalog />,
    },
    {
        path: ABOUT_ROUTE,
        component: <About />
    },
    {
        path: CONTACTS_ROUTE,
        component: <Contacts />,
    },
    {
        path: REGISTER_ROUTE,
        component: <Register />
    },
    {
        path: CART_ROUTE,
        component: <ShopCart />
    },
    {
        path: FAVORITES_ROUTE,
        component: <Favorites />
    },
    {
        path: EQUIPMENT_ROUTE_NESTED,
        component: <EquipmentInfo />
    },
    {
        path: NOTFOUND_ROUTE,
        component: <NotFound />,
    }
]