/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
// Service Pages
import CustomHomes from './pages/CustomHomes';
import KitchenBathRemodeling from './pages/KitchenBathRemodeling';
import WholeHomeRenovations from './pages/WholeHomeRenovations';
import RoomAdditions from './pages/RoomAdditions';
import CommercialBuildouts from './pages/CommercialBuildouts';
import CommercialRenovations from './pages/CommercialRenovations';
// Location Pages
import ServiceAreaOrlando from './pages/ServiceAreaOrlando';
import ServiceAreaWinterPark from './pages/ServiceAreaWinterPark';
import ServiceAreaLakeMary from './pages/ServiceAreaLakeMary';
import ServiceAreaKissimmee from './pages/ServiceAreaKissimmee';
import ServiceAreaSanford from './pages/ServiceAreaSanford';
import ServiceAreaOviedo from './pages/ServiceAreaOviedo';
import ServiceAreaClermont from './pages/ServiceAreaClermont';
import ServiceAreaWinterGarden from './pages/ServiceAreaWinterGarden';
import ServiceAreaWindermere from './pages/ServiceAreaWindermere';
import ServiceAreaAltamonteSprings from './pages/ServiceAreaAltamonteSprings';
import ServiceAreaLakeNona from './pages/ServiceAreaLakeNona';
import ServiceAreaDrPhillips from './pages/ServiceAreaDrPhillips';


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
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};