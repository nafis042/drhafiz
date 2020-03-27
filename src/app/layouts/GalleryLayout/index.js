import React from 'react';
// plugins
import Lightbox from 'react-image-lightbox';
import WOW from 'wow.js';
import Img from 'react-image';
//
import './style.scss';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
export default class GalleryLayout extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    thumbnails: this.props.gallery.thumbnails,
    originals: this.props.gallery.originals,
    heading: this.props.heading ? this.props.heading : null,
    imageToShow: 12
  };
  componentDidMount = () => {
    new WOW().init();
  };
  renderImages = (count) => {
    const { gallery1 } = this.props;
    let photoIndex = -1;
    const images = this.state.thumbnails;
    const n = images.filter((item, key) => key < count);
    return n.map((imageSrc, key) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" sm="6" lg="3" key={photoIndex} className="flex-center">
          <figure>
            <Img
              src={[imageSrc, gallery1.thumbnails[key]]}
              alt="works"
              className="img-fluid cursorZoom z-depth-1 hoverable"
              onClick={() => this.setState({ photoIndex: privateKey, isOpen: true })}
              loader={<MDBIcon icon="circle-notch" spin size="1x" fixed />}
            />
          </figure>
        </MDBCol>
      );
    });
  };
  render = () => {
    const { lang } = this.props;
    const { photoIndex, isOpen, thumbnails, heading, imageToShow } = this.state;
    const { gallery1 } = this.props;
    const { originals } = gallery1;
    return (
      <MDBContainer className="mt-5">
        <h2 className="font-weight-bold my-5 text-center">{heading ? heading : null}</h2>
        <div className="mdb-lightbox">
          <MDBRow>{this.renderImages(imageToShow)}</MDBRow>
          <MDBRow
            children={
              imageToShow < thumbnails.length && (
                <MDBBtn
                  children={lang.more}
                  className="ml-auto mr-auto"
                  onClick={() =>
                    this.setState({
                      imageToShow: this.state.imageToShow + 12
                    })
                  }
                />
              )
            }
          />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={originals[photoIndex]}
            nextSrc={originals[(photoIndex + 1) % originals.length]}
            prevSrc={originals[(photoIndex + originals.length - 1) % originals.length]}
            imageTitle={photoIndex + 1 + '/' + originals.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + originals.length - 1) % originals.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % originals.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  };
}
