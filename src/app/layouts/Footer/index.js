import React from 'react';
// styles
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, NavLink, Button } from 'mdbreact';
import './style.scss';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    const { lang, Social } = this.props;
    const DateNow = new Date();
    const Year = DateNow.getFullYear();
    
    return (
      <MDBFooter color="default-color" className="font-small">
        <MDBContainer className="text-center text-md-left p-2 ">
          <MDBRow className="d-flex justify-content-end">
            <MDBCol lg="5" md="8" sm="12" className="socialColumn">
              <h5 className="font-weight-lighter h5-responsive" children={lang.footerHeading} />
              <hr />
              <ul className="d-flex justify-content-center">
                {Social.map((item, key) => (
                  <li className="list-unstyled animated fadeIn" key={key}>
                    <a key={key} href={item.url} target="_blank" rel="noopener noreferrer" children={<MDBIcon fab icon={item.icon} size="2x" />} />
                  </li>
                ))}
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol children={`© ${Year}`} />
              <MDBCol children={<a href="https://www.facebook.com/matevosyanmko" children={lang.author} target="_blank" rel="noopener noreferrer" />} />
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
const get = (state) => {
  return { Social: state.Social };
};
export default connect(get)(Footer);
