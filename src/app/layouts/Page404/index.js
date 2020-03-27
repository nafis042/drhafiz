import React from 'react';
import Img404 from '../../../assets/images/404.svg';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
export default class Page404 extends React.Component {
  componentDidMount = () => {
    new WOW().init();
  };
  render() {
    return (
      <div className="w-100  d-flex flex-column justify-content-around align-items-center" style={{ height: '100vh', background: 'lightgray' }}>
        <h1 className="font-weight-bold display-1 text-center wow zoomIn delay-0.5s faster">Page not found</h1>
        <img src={Img404} width="20%" className="wow  pulse delay-1s infinite" alt="" />
        <Link to="/" className="black-text lead wow shake delay-2s">
          <u>Go to main page</u>
        </Link>
      </div>
    );
  }
}
