import { ICatalogItem } from "../types/types";
import { CATALOG_ROUTE, CATALOG_ROUTE_NESTED } from "./consts";

import LaboratoryIcon from '../assets/images/catalog/laboratory.png'
import AmbulanceIcon from '../assets/images/catalog/ambulance.png'
import DentistryIcon from '../assets/images/catalog/dentistry.png'
import FlukeBiomedicalIcon from '../assets/images/catalog/fluke.png'
import GynecologyIcon from '../assets/images/catalog/gynecology.png'
import SterilizationIcon from '../assets/images/catalog/sterilization.png'
import SurgeryIcon from '../assets/images/catalog/surgery.png'
import DiagnosticsIcon from '../assets/images/catalog/diagnostics.png'
import OphthalmologyIcon from '../assets/images/catalog/ophthalmology.png'
import TomographyIcon from '../assets/images/catalog/tomography.png'
import React from "react";

export const catalogItems: ICatalogItem[] = [
    {
        title: 'Laboratory',
        icon: LaboratoryIcon,
        path: CATALOG_ROUTE_NESTED + 'Laboratory',
    },
    {
        title: 'Ambulance',
        icon: AmbulanceIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Dentistry',
        icon: DentistryIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Obstetrics and gynecology',
        icon: GynecologyIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Fluke Biomedical',
        icon: FlukeBiomedicalIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Sterilization and disinfection',
        icon: SterilizationIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Surgery and resuscitation',
        icon: SurgeryIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Functional diagnostics',
        icon: DiagnosticsIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Ophthalmology',
        icon: OphthalmologyIcon,
        path: CATALOG_ROUTE,
    },
    {
        title: 'Radiology and tomography',
        icon: TomographyIcon,
        path: CATALOG_ROUTE,
    },
]

export const CatalogItemsContext = React.createContext(catalogItems)