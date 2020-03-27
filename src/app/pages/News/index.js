import React from 'react';
// page layouts
import Header from '../../layouts/Header/index';
import Footer from '../../layouts/Footer/index';
//
import { url } from '../../../config/routes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Img from 'react-image';
// style
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './style.scss';
// animation
import WOW from 'wow.js';
//
import Helmet from 'react-helmet';
// assets
import NewsPaper from '../../../assets/images/newspaper.svg';

class News extends React.Component {
  componentDidMount = () => {
    new WOW().init();
  };
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange, NewsList } = this.props;
    // const newsList = NewsList;
    const newsList = [];
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{['Նորություններ', 'Новости', 'News'][lang.id]}</title>
          <link rel="canonical" href={url + 'news'} />
          <meta name="description" content="Dr.Gor  Amirbekyan news" />
          <meta name="keywords" content="plastic,surgeon,doctor,armenia,gor,amirbekyan,news" />
        </Helmet>

        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main>
          <MDBContainer className="my-5">
            <MDBRow>
              {newsList.length ? (
                newsList.map((item, key) => (
                  <MDBCol lg="4" md="6" sm="12" className="md-0 mb-4 wow  fadeIn newsItem pointer imgParent" key={item.id}>
                    <Link to={`news/${item.id}`}>
                      <MDBView zoom={true} className="z-depth-1 imgParent hoverable">
                        <Img src={item.Media.Images.jpg.thumbnails.length ? item.Media.Images.jpg.thumbnails[0] : null} class="img-fluid" alt="" />
                        <MDBMask className="d-flex align-items-end " pattern={5} overlay="black-strong">
                          <p children={item.Heading[lang.id]} className="rgba-teal-strong p-2 w-100 white-text  m-0 text-justify" />
                        </MDBMask>
                      </MDBView>
                    </Link>
                  </MDBCol>
                ))
              ) : (
                <div
                  children={
                    <>
                      <h2 children={lang.noNews} className="text-center" />
                      <Img src={NewsPaper} width="100" className="my-4" />
                    </>
                  }
                  className=" w-100 p-5 m-5 d-flex flex-column justify-content-center align-items-center h2-responsive"
                />
              )}
            </MDBRow>
          </MDBContainer>
        </main>
        <Footer lang={lang} />
      </>
    );
  };
}

const get = (state) => {
  return { NewsList: state.News };
};

export default connect(get)(News);
