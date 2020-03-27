import React from 'react';
// page layouts
import Header from '../../layouts/Header/index';
import Footer from '../../layouts/Footer/index';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdbreact';
import { connect } from 'react-redux';
//
import { url } from '../../../config/routes';
// helmet module
import { Helmet } from 'react-helmet';
import '../style.scss';

class ContactMe extends React.Component {
  render = () => {
    const { lang, onLangChange, activeMenuId, onMenuChange, Contacts } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{['Կապ', 'Контакты', 'Contact Me'][lang.id]}</title>
          <link rel="canonical" href={url + 'contact_me'} />
          <meta name="description" content="Dr.Gor  Amirbekyan  contacts,address,telephone" />
          <meta name="keywords" content="plastic,surgeon,doctor,armenia,gor,amirbekyan,contacts,address,telephone" />
        </Helmet>
        <Header lang={lang} onLangChange={onLangChange} activeMenuId={activeMenuId} onMenuChange={onMenuChange} />
        <main>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="9" className="md-0 mb-5">
                <form color="default" action="https://formspree.io/xvoqnqbr" method="POST">
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput type="text" id="contact-name" label={lang.yourName} name="name" required />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput type="email" id="contact-email" label={lang.yourEmail} name="email" required />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput type="text" id="contact-subject" label={lang.yourMsgHeading} name="subject" required />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput type="textarea" id="contact-message" label={lang.yourMsg} name="message" required />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div className="text-center text-md-left">
                    <MDBBtn color="default" type="submit" size="md" children={lang.sendMsg} />
                  </div>
                </form>
              </MDBCol>
              <MDBCol md="3" className="text-center">
                <ul className="list-unstyled mb-0">
                  {Contacts.map((item, key) => (
                    <li key={key} id={item.id != 1 ? 'glob' : null}>
                      <MDBIcon icon={item.icon} size="2x" className="teal-text" />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.id == 1 ? item.text[lang.id] : item.text
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
        <Footer lang={lang} />
      </>
    );
  };
}

const get = (state) => {
  return { Contacts: state.Contacts };
};
export default connect(get)(ContactMe);
