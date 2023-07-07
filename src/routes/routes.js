import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import LayoutOther from "../components/layout/layoutOther";
import LandingPage from "../page/landingPage";
import AuthPage from "../page/authPage/authPage";
import RegisterAuth from "../page/registerPage/register";

const Router = (loggedIn) => {
	return [
		{
			path: "apps",
			element: loggedIn ? <Layout /> : <Navigate to="/apps/home" />,
			children: [{ path: "home", element: <LandingPage /> }],
		},
		{
			path: "auth",
			element: !loggedIn ? <LayoutOther /> : <Navigate to="/" />,
			children: [
				{ path: "login", element: <AuthPage /> },
				{ path: "register", element: <RegisterAuth /> },
			],
		},
		{
			path: "/",
			element: <AuthPage />,
		},
	];
};
export default Router;
