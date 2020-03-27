// components
import Homepage from '../app/pages/Homepage';
import AboutMe from '../app/pages/AboutMe';
import ContactMe from '../app/pages/ContactMe';
import ProcedureList from '../app/pages/ProcedureList';
import Gallery from '../app/pages/Gallery';
import News from '../app/pages/News';
import NewsItem from '../app/layouts/NewsItem';
import Page404 from '../app/layouts/Page404';

export const url = `https://dr.amirbekyan.com/`;
export const Routes = [
  // main route
  { id: 1, path: '/', component: Homepage },
  { id: 2, path: '/procedures/:id', component: ProcedureList },
  { id: 3, path: '/about_me', component: AboutMe },
  { id: 4, path: '/gallery', component: Gallery },
  { id: 5, path: '/news', component: News },
  { id: 6, path: '/news/:id', component: NewsItem },
  { id: 7, path: '/contact_me', component: ContactMe },
  { id: 8, path: null, component: Page404 }
];
