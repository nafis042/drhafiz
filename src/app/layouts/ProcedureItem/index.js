import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Img from 'react-image';
import Img404 from '../../../assets/images/404.svg';

import './style.scss';
export default class ProcedureItem extends React.Component {
  render = () => {
    if (this.props.data) {
      const { Heading, Media, SubHeading, Description } = this.props.data;
      const { lang } = this.props;
      return (
        <MDBContainer className="p-5" fluid={true}>
          <h1 className="h1-responsive font-weight-bold " dangerouslySetInnerHTML={{ __html: Heading[lang.id] }} />
          <h3 className="h3-responsive " dangerouslySetInnerHTML={{ __html: SubHeading[lang.id] }} />
          <hr className="my-10" />
          <MDBRow>
            {Description.map((service, key) => (
              <MDBCol sm="12" md="6" key={key} className="py-5 mr-auto wow fadeIn">
                <h4 dangerouslySetInnerHTML={{ __html: service.name[lang.id] }} className="font-weight-bolder  border-bottom border-dark pb-2" />
                <p dangerouslySetInnerHTML={{ __html: service.value[lang.id] }} className="text-justify" />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      );
    } else {
      return (
        <>
          <h1 className="h1-responsive pt-5 mt-5  text-center">Page not found</h1>
          <Img src={Img404} className="Img404 pb-5 mb-5" />
        </>
      );
    }
  };
}
