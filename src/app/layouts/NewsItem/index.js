import React from 'react';
// page layouts
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Article from './article';
//redux
import { connect } from 'react-redux';
//
import Helmet from 'react-helmet';
import './style.scss';
class NewsItem extends React.Component {
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange, match, NewsList } = this.props;
    let currentPageData = NewsList[match.id - 1] ? NewsList[match.id - 1] : null;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{currentPageData.Heading[lang.id]}</title>
          <link rel="canonical" href={window.location} />
          <meta name="description" content="Dr.Gor  Amirbekyan website" />
          <meta name="keywords" content="plastic,surgeon,doctor,armenia,gor,amirbekyan" />
        </Helmet>

        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main children={<Article data={currentPageData} lang={lang} />} />
        <Footer lang={lang} />
      </>
    );
  };
}
const get = (state) => {
  return { NewsList: state.News };
};

export default connect(get)(NewsItem);
