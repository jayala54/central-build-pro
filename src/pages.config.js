import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
// Service Pages
const CustomHomes = React.lazy(() => import('./pages/CustomHomes'));
const KitchenBathRemodeling = React.lazy(() => import('./pages/KitchenBathRemodeling'));
const WholeHomeRenovations = React.lazy(() => import('./pages/WholeHomeRenovations'));
const RoomAdditions = React.lazy(() => import('./pages/RoomAdditions'));
const CommercialBuildouts = React.lazy(() => import('./pages/CommercialBuildouts'));
const CommercialRenovations = React.lazy(() => import('./pages/CommercialRenovations'));
// Location Pages
const ServiceAreaOrlando = React.lazy(() => import('./pages/ServiceAreaOrlando'));
const ServiceAreaWinterPark = React.lazy(() => import('./pages/ServiceAreaWinterPark'));
const ServiceAreaLakeMary = React.lazy(() => import('./pages/ServiceAreaLakeMary'));
const ServiceAreaKissimmee = React.lazy(() => import('./pages/ServiceAreaKissimmee'));
const ServiceAreaSanford = React.lazy(() => import('./pages/ServiceAreaSanford'));
const ServiceAreaOviedo = React.lazy(() => import('./pages/ServiceAreaOviedo'));
const ServiceAreaClermont = React.lazy(() => import('./pages/ServiceAreaClermont'));
const ServiceAreaWinterGarden = React.lazy(() => import('./pages/ServiceAreaWinterGarden'));
const ServiceAreaWindermere = React.lazy(() => import('./pages/ServiceAreaWindermere'));
const ServiceAreaAltamonteSprings = React.lazy(() => import('./pages/ServiceAreaAltamonteSprings'));
const ServiceAreaLakeNona = React.lazy(() => import('./pages/ServiceAreaLakeNona'));
const ServiceAreaDrPhillips = React.lazy(() => import('./pages/ServiceAreaDrPhillips'));
// Legal Pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));


export const PAGES = {
    "Home": Home,
    "Services": Services,
    "Projects": Projects,
    "About": About,
    "Contact": Contact,
    "Blog": Blog,
    // Service Pages
    "CustomHomes": CustomHomes,
    "KitchenBathRemodeling": KitchenBathRemodeling,
    "WholeHomeRenovations": WholeHomeRenovations,
    "RoomAdditions": RoomAdditions,
    "CommercialBuildouts": CommercialBuildouts,
    "CommercialRenovations": CommercialRenovations,
    // Location Pages
    "ServiceAreaOrlando": ServiceAreaOrlando,
    "ServiceAreaWinterPark": ServiceAreaWinterPark,
    "ServiceAreaLakeMary": ServiceAreaLakeMary,
    "ServiceAreaKissimmee": ServiceAreaKissimmee,
    "ServiceAreaSanford": ServiceAreaSanford,
    "ServiceAreaOviedo": ServiceAreaOviedo,
    "ServiceAreaClermont": ServiceAreaClermont,
    "ServiceAreaWinterGarden": ServiceAreaWinterGarden,
    "ServiceAreaWindermere": ServiceAreaWindermere,
    "ServiceAreaAltamonteSprings": ServiceAreaAltamonteSprings,
    "ServiceAreaLakeNona": ServiceAreaLakeNona,
    "ServiceAreaDrPhillips": ServiceAreaDrPhillips,
    // Legal Pages
    "PrivacyPolicy": PrivacyPolicy,
    "TermsOfService": TermsOfService,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};
