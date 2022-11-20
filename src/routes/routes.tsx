import {ReactElement } from "react";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import Contacts from "../pages/Contacts/Contacts";
import MainPage from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import ShopCart from "../pages/ShopCart/ShopCart";
import SinglePage from "../pages/SinglePage/SinglePage";
import { ABOUT_ROUTE, CART_ROUTE, CATALOG_ROUTE, CATALOG_ROUTE_NESTED, CONTACTS_ROUTE, MAIN_ROUTE, NOTFOUND_ROUTE, REGISTER_ROUTE } from "../utils/consts";

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
        path: CATALOG_ROUTE,
        component: <SinglePage />
    },
    {
        path: NOTFOUND_ROUTE,
        component: <NotFound />,
    }
]