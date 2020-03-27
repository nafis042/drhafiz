import React from 'react';
// assets
import Logo from '../../../assets/images/logo.webp';
import Logo1 from '../../../assets/images/logo.png';
import Polyline from '../../../assets/images/asset.webp';
import Polyline1 from '../../../assets/images/asset.png';
// style
import DropdownMenu, { NestedDropdownMenu } from 'react-dd-menu';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './style.scss';
// plugins
import posed from 'react-pose';
import Img from 'react-image';
// data

import { connect } from 'react-redux';

const Box = posed.img({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

class Header extends React.Component {
  state = {
    collapse1: false,
    collapseID: '',
    isOpen: true,
    isMenuOpen: false
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };
  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = () => {
    this.setState({ isMenuOpen: false });
  };
  render = () => {
    const { Menu, LocalizationImg } = this.props;
    const { lang, onLangChange, activeMenuId, onMenuChange, Contacts } = this.props;
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      align: 'right',
      className: `customDrop ${this.state.isMenuOpen ? 'menuOpen' : null}`,
      animate: true
    };

    const nestedProps = {
      delay: 200,
      animate: true,
      openOnMouseover: false,
      className: 'customNested'
    };
    return (
      <header className="z-depth-half w-100 p-0">
        <MDBContainer fluid={true}>
          <MDBRow>
            <MDBCol size="12">
              <MDBNavbar color="transparent" dark expand="md" className="z-depth-0 navbarTop ">
                <MDBNavbarBrand className="animated pulse  delay-2s">
                  <MDBNavLink to="/" children={<Box src={Logo} srcSet={Logo1} id="brandLogo" />} />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => this.toggleSingleCollapse('collapse1')}>
                  <MDBIcon icon={this.state.collapse1 ? 'window-close' : 'bars'} className="iconAnim" />
                </MDBNavbarToggler>
                <MDBCollapse isOpen={this.state.collapse1} navbar id="navbarCollapse1">
                  <Img src={[Polyline, Polyline1]} className="polyline" alt="" />
                  <div className="emptySpace" />
                  <MDBNavbarNav left className=" white-text  text-left navbarHeading d-flex flex-column justify-content-center ">
                    <h2 children={lang.doctorName} className="font-weight-bold text-left h4-responsive" />
                    <h3 children={lang.plasticSurgeon} className="h5-responsive font-weight-lighter" />
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBRow className="social d-flex flex-row align-items-center justify-content-center">
                      <div className="d-flex align-items-center m-0 mr-4 numbers" id="glob">
                        <MDBIcon icon="phone" size="1.5x" className="teal-text d-flex mr-3  " />
                        <p className="d-flex flex-column m-0  h6-responsive">
                          <a href="tel:+8801714475325" children={<span children="+880-1714 475 325" />} />
                          <a href="tel:+8801515262338" children={<span children="+880-1515 262 338" />} />
                        </p>
                      </div>
                      <p className="d-flex align-items-center my-2 text-right h6-responsive">
                        <MDBIcon icon="map-marker-alt" size="1.5x" className="teal-text d-flex mr-3" />

                        <a
                          href="geo:40.190638, 44.527451 ?q=40.190638, 44.527451(Dr. Gor Amirbekyan ,MD, Plastic Surgeon)"
                          target="_blank"
                          rel="noopener noreferrer"
                          children={
                            <span
                              dangerouslySetInnerHTML={{
                                __html: lang.address
                              }}
                            />
                          }
                        />
                      </p>
                    </MDBRow>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBRow className="localization d-flex flex-column align-items-center">
                      {LocalizationImg.map((item, key) => (
                        <MDBNavItem key={key}>
                          <MDBBtn color={key === lang.id ? 'default' : 'transparent'} size="sm" onClick={() => onLangChange(item.id)} className="p-1 pl-2 pr-2 z-depth-1">
                            <Img src={item.img} />
                          </MDBBtn>
                        </MDBNavItem>
                      ))}
                    </MDBRow>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </MDBCol>
          </MDBRow>

          <MDBRow className="bottomNav default-color z-depth-1 ">
            <MDBCol size="12">
              <MDBNavbar dark expand="md" className="shadow-none">
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse1} navbar>
                  <MDBNavbarNav className="nav-justified bordered men">
                    {Menu.map((item, key) => {
                      if (!item.hasOwnProperty('dropdownItems')) {
                        return (
                          <MDBNavItem key={key} className="menuItem" active={activeMenuId === item.id ? true : false} onClick={() => onMenuChange(item.id)}>
                            <MDBNavLink to={item.path} children={item.name[lang.id]} />
                          </MDBNavItem>
                        );
                      } else {
                        return (
                          <MDBNavItem key={key}>
                            <DropdownMenu
                              toggle={
                                <MDBNavItem
                                  children={
                                    <>
                                      {item.name[lang.id]}
                                      <MDBIcon icon="angle-down" className="ml-3" />
                                    </>
                                  }
                                  onClick={this.toggle}
                                />
                              }
                              {...menuOptions}>
                              {item.dropdownItems.map((itemDropDown, key1) => (
                                <NestedDropdownMenu
                                  key={key1}
                                  toggle={
                                    <MDBNavItem
                                      children={
                                        <>
                                          {itemDropDown.name[lang.id]}
                                          <MDBIcon icon="angle-down" className="ml-3" />
                                        </>
                                      }
                                    />
                                  }
                                  {...nestedProps}>
                                  {itemDropDown.dropdownItems.map((item1, key2) => (
                                    <MDBNavLink children={item1.name[lang.id]} to={item1.path} onClick={() => this.setState({ collapse1: false })} key={key2} />
                                  ))}
                                </NestedDropdownMenu>
                              ))}
                            </DropdownMenu>
                          </MDBNavItem>
                        );
                      }
                    })}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
    );
  };
}
const get = (state) => {
  return {
    LocalizationImg: state.LocalizationImg,
    Social: state.Social,
    Menu: state.Menu,
    Contacts: state.Contacts
  };
};

export default connect(get)(Header);
