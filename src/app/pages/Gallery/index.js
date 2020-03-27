import React from 'react';
// page layouts
import Header from '../../layouts/Header/index';
import GalleryLayout from '../../layouts/GalleryLayout';
import Footer from '../../layouts/Footer/index';
// plugins
import WOW from 'wow.js';
import { url } from '../../../config/routes';

//style
import './style.scss';
// data
import { connect } from 'react-redux';
// helmet modue
import Helmet from 'react-helmet';

class Gallery extends React.Component {
  componentDidMount = () => {
    new WOW().init();
  };
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange, Gallery } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{['Նկարներ', 'Галерея', 'Gallery'][lang.id]}</title>
          <link rel="canonical" href={url + 'gallery'} />
          <meta name="description" content="Dr.Gor  Amirbekyan works" />
          <meta name="keywords" content="plastic,surgeon,doctor,armenia,gor,amirbekyan,works,gallery,images,pacient" />
        </Helmet>
        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main children={<GalleryLayout gallery={Gallery.webp} gallery1={Gallery.jpg} lang={lang} />} />
        <Footer lang={lang} />
      </>
    );
  };
}
const get = (state) => {
  return { Gallery: state.Gallery };
};
export default connect(get)(Gallery);
