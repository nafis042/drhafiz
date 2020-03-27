import { combineReducers } from 'redux';
// data
import News from './reducers/news';
import Carousel from './reducers/carousel';
import LocalizationImg from './reducers/localizationImages';
import Social from './reducers/social';
import Menu from './reducers/menu';
import Gallery from './reducers/gallery';
import Procedures from './reducers/procedures';
import Contacts from './reducers/contacts';
import Biography from './reducers/biography';
import PersonalSocial from './reducers/personalSocial';
//
export default combineReducers({
  PersonalSocial,
  News,
  Carousel,
  LocalizationImg,
  Social,
  Menu,
  Gallery,
  Procedures,
  Biography,
  Contacts
});
