import React, { Component } from 'react';
// style
import './style.scss';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact';
//
import { connect } from 'react-redux';
import Img from 'react-image';

class CarouselSlider extends Component {
  render() {
    const { lang, CarouselItems } = this.props;
    return (
      <div className="carouselParent">
        <MDBCarousel activeItem={1} duration={8000} length={CarouselItems.length} showControls={true} showIndicators={true} className="shadow-none">
          <MDBCarouselInner>
            {CarouselItems.map((item, key) => (
              <MDBCarouselItem itemId={item.id} key={key}>
                <MDBView>
                  <Img className="d-block h-100 m-auto " src={[item.src1, item.src]} alt="" style={{ visibiility: 'hidden' }} />

                  <MDBMask overlay="black-dark" />
                </MDBView>
                <MDBCarouselCaption className="">
                  <h3 className="h3-responsive carouselCaption">{item.caption && item.caption[lang.id]}</h3>
                  <p children={item.altText && item.altText[lang.id]} className="carouselAltText" />
                </MDBCarouselCaption>
              </MDBCarouselItem>
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    );
  }
}
const get = (state) => {
  return { CarouselItems: state.Carousel };
};
export default connect(get)(CarouselSlider);
