import {ReactElement } from "react";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import Contacts from "../pages/Contacts/Contacts";
import MainPage from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import { ABOUT_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, NOTFOUND_ROUTE } from "../utils/consts";

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
        path: CATALOG_ROUTE,
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
        path: NOTFOUND_ROUTE,
        component: <NotFound />,
    }
]