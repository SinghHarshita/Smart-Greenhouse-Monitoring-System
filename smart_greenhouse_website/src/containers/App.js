import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import { IntlProvider} from 'react-intl';

import ColorSwitcher from 'Components/ColorSwitcher'
import {  NotificationContainer} from "Components/ReactNotifications";

import { defaultStartPath } from 'Constants/defaultValues'

import { connect } from "react-redux";

import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from 'Routes/layouts/login'
import register from 'Routes/layouts/register'
import error from 'Routes/layouts/error'
import forgotPassword from 'Routes/layouts/forgot-password'

import MultipageHome from "Routes/landing-pages/multipage-home";
import SinglepageHome from "Routes/landing-pages/singlepage-home";
import About from "Routes/landing-pages/about";
import AuthLogin from "Routes/landing-pages/auth-login";
import AuthRegister from "Routes/landing-pages/auth-register";
import Blog from "Routes/landing-pages/blog";
import BlogDetail from "Routes/landing-pages/blog-detail";
import Careers from "Routes/landing-pages/careers";
import Confirmation from "Routes/landing-pages/confirmation";
import Contact from "Routes/landing-pages/contact";
import Content from "Routes/landing-pages/content";
import Docs from "Routes/landing-pages/docs";
import Features from "Routes/landing-pages/features";
import Prices from "Routes/landing-pages/prices";
import Videos from "Routes/landing-pages/videos";
import VideoDetail from "Routes/landing-pages/video-detail";
import DocsDetails from "Routes/landing-pages/docs-details";


import 'Assets/css/vendor/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';


const InitialPath = ({ component: Component, ...rest, authUser }) =>
	<Route
		{...rest}
		render={props =>
			authUser
				? <Component {...props} />
				: <Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>}
	/>;

class App extends Component {
	render() {
		const { location, match, user, locale } = this.props;
		const currentAppLocale = AppLocale[locale];
		if (location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') {
			return (<Redirect to={defaultStartPath} />);
		}
		return (
			<Fragment>
				<IntlProvider
					locale={currentAppLocale.locale}
					messages={currentAppLocale.messages}
				>

					<Fragment>
  						<NotificationContainer />
						<Switch>
							<InitialPath
							path={`${match.url}app`}
							authUser={user}
							component={MainRoute}
						/>
        					<Route path={`/multipage-home`} component={MultipageHome} />
        					<Route exact path={`/home`} component={SinglepageHome} />
        					<Route path={`/about`} component={About} />
        					<Route path={`/auth-login`} component={AuthLogin} />
        					<Route path={`/auth-register`} component={AuthRegister} />
        					<Route path={`/blog`} component={Blog} />
        					<Route path={`/blog-detail`} component={BlogDetail} />
        					<Route path={`/careers`} component={Careers} />
        					<Route path={`/confirmation`} component={Confirmation} />
        					<Route path={`/contact`} component={Contact} />
        					<Route path={`/content`} component={Content} />
        					<Route path={`/docs`} component={Docs} />
        					<Route path={`/features`} component={Features} />
        					<Route path={`/prices`} component={Prices} />
        					<Route path={`/videos`} component={Videos} />
        					<Route path={`/video-detail`} component={VideoDetail} />
        					<Route path={`/docs-details`} component={DocsDetails} />

							<Route path={`/login`} component={login} />
							<Route path={`/register`} component={register} />
							<Route path={`/forgot-password`} component={forgotPassword} />
							<Route path={`/error`} component={error} />
							<Redirect to="/error" />
						</Switch>
						<ColorSwitcher />
					</Fragment>
				</IntlProvider>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ authUser, settings }) => {
	const { user } = authUser;
	const { locale } = settings;
	return { user, locale };
};

export default connect(mapStateToProps, { })(App);

