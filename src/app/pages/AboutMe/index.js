import React from 'react';
// page layouts
import Header from '../../layouts/Header/index';
import Footer from '../../layouts/Footer/index';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { url } from '../../../config/routes';
// animation
import WOW from 'wow.js';
// images
import Doctor from '../../../assets/images/doctor.webp';
import Doctor1 from '../../../assets/images/doctor.jpg';
// helmet module
import { Helmet } from 'react-helmet';
// redux
import { connect } from 'react-redux';

import './style.scss';

class AboutMe extends React.Component {
  componentDidMount = () => {
    new WOW().init();
  };
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange, Biography, PersonalSocial } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{['Իմ մասին', 'Обо мне', 'About Me'][lang.id]}</title>
          <link rel="canonical" href={url + 'about_me'} />
          <meta name="description" content="Doctor Gor Amirbekyan biography and social links" />
          <meta name="keywords" content="plastic,surgeon,doctor,armenia,gor,amirbekyan,bio,biography,social" />
        </Helmet>
        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main>
          <MDBContainer fluid className="m-4">
            <h1 className="h1-responsive font-weight-bolder text-center" children={lang.biography} />
            <MDBRow className="d-flex  align-items-start justify-content-start  ">
              <MDBCol lg="6" md="8" sm="12" className="me wow fadeInLeft fast d-flex  justify-content-center align-items-center">
                <MDBCard className="doctorCard" itemScope itemType="http://schema.org/Person">
                  <MDBCardImage className="img-fluid" src={Doctor1} waves itemProp="image" />
                  <MDBCardBody>
                    <MDBCardTitle children={lang.doctorName} className="h2-responsive" itemProp="givenName" />
                    <MDBCardText children={lang.plasticSurgeon} className="h3-responsive" itemProp="jobTitle" />
                    <MDBRow className="d-flex justify-content-center">
                      {PersonalSocial.map((item, key) => (
                        <MDBBtn size="md" floating key={key} href={item.urlTo} target="_blank">
                          <MDBIcon fab icon={item.icon} />
                        </MDBBtn>
                      ))}
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {Biography.map((item, key) => (
                <MDBCol size="12" lg="6" md="12" sm="12" className="me wow fadeInRight fast d-flex" key={key}>
                  <div className="mt-5">
                    <h3 className="h3-responsive borderBottom pb-2 uppercase" children={item.heading[lang.id]} />

                    {item.list
                      ? item.list.map((item1, key) =>
                          item.id !== 6 ? (
                            <div className="mb-2 pl-2 borderLeft" key={key}>
                              <small children={item.id == 1 ? item1.year : item1.year[lang.id]} className="text-black-50" />
                              <p className="responsive m-0 pb-0 font-weight-bolder  pl-2" children={item1.text[lang.id]} />

                              {item1.desc ? <small className="responsive text-black-80 pl-5  smallDesc" children={item1.desc[lang.id]} /> : null}
                            </div>
                          ) : (
                            <div className="mb-2 pl-2 borderLeft" key={key}>
                              <small children={item1.year} className="text-black-50" />
                              {item1.listItems.map((item2, key) => (
                                <div className="p-3" key={key}>
                                  <p children={item2.itemHeading[lang.id]} className="font-weight-bold" />
                                  <p children={item2.char[lang.id]} />
                                  <small children={item2.authors[lang.id]} className="text-black-50 " />
                                </div>
                              ))}
                            </div>
                          )
                        )
                      : null}
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </main>

        <Footer lang={lang} />
      </>
    );
  };
}

const get = (state) => {
  return { Biography: state.Biography, PersonalSocial: state.PersonalSocial };
};
export default connect(get)(AboutMe);
