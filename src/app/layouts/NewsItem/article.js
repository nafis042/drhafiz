import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Img from 'react-image';
import Img404 from '../../../assets/images/404.svg';
// page layouts
import GalleryLayout from '../../layouts/GalleryLayout';
//
import './style.scss';
export default class Article extends React.Component {
  render = () => {
    if (this.props.data) {
      const { Heading, Media, Description } = this.props.data;
      const { lang } = this.props;
      return (
        <MDBContainer className="p-0 pt-5" fluid={true}>
          <h1 className="h1-responsive text-center p-5" dangerouslySetInnerHTML={{ __html: Heading[lang.id] }} />
          <hr className="my-10" />
          <MDBRow className=" newsColumn d-flex  flex-column-reverse justify-content-center align-items-start p-5">
            <MDBCol size="12" sm="12" id="desc" dangerouslySetInnerHTML={{ __html: Description[lang.id] }} />
            <MDBCol size="12" sm="12">
              <Img src={Media.Images.jpg.thumbnails.length ? Media.Images.jpg.thumbnails[0] : null} className="img-fluid pb-4 m-auto d-block mainImg" />
            </MDBCol>
          </MDBRow>
          <h3 children={['Մեդիա', 'Медиа', 'Media'][lang.id]} className="h3-responsive text-center" />
          <hr className="my-10" />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size={12}>
              <GalleryLayout gallery={Media.Images.webp} gallery1={Media.Images.jpg} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    } else {
      return (
        <>
          <h1 className="h1-responsive pt-5 mt-5  text-center">Page not found</h1>
          <img src={Img404} className="Img404 pb-5 mb-5" alt="" />
        </>
      );
    }
  };
}
