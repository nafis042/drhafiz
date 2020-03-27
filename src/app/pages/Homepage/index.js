import React from 'react';
import { url } from '../../../config/routes';
// page layouts
import Carousel from '../../layouts/Carousel';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
//
import '../style.scss';
import { Helmet } from 'react-helmet';

export default class Homepage extends React.Component {
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{['Գլխավոր էջ', 'Главная', 'Home'][lang.id]}</title>
          <link rel="canonical" href={url} />
          <meta name="description" content="Gor Amirbekyan - Plastic surgeon,microsurgeon-Personal website " />
          <meta name="keywords" content="gor,amirbekyan,plastic,surgeon,doctor,armenia,microsurgeon" />
          <meta name="author" content="Mkrtich Matevosyan" />
        </Helmet>
        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main children={<Carousel lang={lang} />} className="homepageCarousel w-100" />
        <Footer lang={lang} />
      </>
    );
  };
}
