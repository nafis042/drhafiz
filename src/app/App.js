import React from 'react';
// page layouts
import { Routes } from '../config/routes';
import { Route, Switch } from 'react-router-dom';
// languages
import { Localization } from '../config/localization';

export default class App extends React.Component {
  state = { lang: Localization[0], activeMenuId: 0, isLoading: false };

  // hide loader ,and delete loader style on mount
  componentDidMount = () => {
    const location = this.props.location.pathname;
    // check location for set active menu id,style
    switch (location) {
      case '/':
        this.setState({ activeMenuId: 0 });
        break;
      case '/procedures':
        this.setState({ activeMenuId: 1 });
        break;
      case '/news':
        this.setState({ activeMenuId: 2 });
        break;
      case '/gallery':
        this.setState({ activeMenuId: 3 });
        break;
      case '/about_me':
        this.setState({ activeMenuId: 4 });
        break;
      case '/contact_me':
        this.setState({ activeMenuId: 5 });
        break;
      default:
        this.setState({ activeMenuId: 0 });
    }
    // remove loader on page mount
    let loaderStyle = document.getElementById('fullStyle');
    let loaderImage = document.getElementById('full');
    let body = document.body;
    loaderImage.remove();
    loaderStyle.remove();
    body.classList.add('animated', 'fadeIn', 'slower');
    // check if  active language set
    const activeLanguage = window.localStorage.getItem('activeLanguage');
    if (activeLanguage) {
      this.setState({ lang: Localization[activeLanguage] });
    }
  };
  // on language change
  onLangChange = (id) =>
    this.setState({ lang: Localization[id] }, () => {
      window.localStorage.setItem('activeLanguage', Localization[id].id);
    });

  // on menu change
  onMenuChange = (activeMenuId) => this.setState({ activeMenuId });

  // scroll to top on route change
  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }
  handleLocationChange = (location) => {
    window.scrollTo(0, 0);
  };
  componentWillUpdate() {
    document.body.classList.remove('fadeIn');
  }
  componentDidUpdate() {
    document.body.classList.add('fadeIn');
  }
  render = () => {
    const { lang, activeMenuId } = this.state;
    return (
      <>
        <Switch>
          {Routes.map((route, key) => (
            <Route
              exact
              path={route.path}
              render={(props) => (
                <route.component
                  lang={lang}
                  onLangChange={this.onLangChange}
                  activeMenuId={activeMenuId}
                  onMenuChange={this.onMenuChange}
                  match={route.id === 6 || route.id === 2 ? props.match.params : null}
                />
              )}
              key={key}
            />
          ))}
        </Switch>
      </>
    );
  };
}
