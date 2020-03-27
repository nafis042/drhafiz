import React from 'react';
// page layouts
import Header from '../../layouts/Header/index';
import ProcedureItem from '../../layouts/ProcedureItem';
import Footer from '../../layouts/Footer/index';
import { url } from '../../../config/routes';
//redux
import { connect } from 'react-redux';

// helmet
import Helmet from 'react-helmet';
class ProcedureList extends React.Component {
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange, Procedures, match } = this.props;

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Procedures[match.id - 1].Heading[lang.id]}</title>
          <link rel="canonical" href={url + 'procedures/1'} />
          <meta name="description" content="Dr.Gor  Amirbekyan website " />
          <meta name="keywords" content="plastic,surgeon,doctor,armenia,gor,amirbekyan" />
        </Helmet>
        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main children={<ProcedureItem data={Procedures[match.id - 1]} lang={lang} />} />
        <Footer lang={lang} />
      </>
    );
  };
}
const get = (state) => {
  return { Procedures: state.Procedures };
};

export default connect(get)(ProcedureList);
