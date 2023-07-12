import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"

//Pages
import HomePage from "../pages/Home";
import BlogList from "../pages/Blog/BlogList"
import VerifyEmail from "../pages/VerifyEmail"
import VerifyEmailStatus from "../pages/VerifyEmailStatus"
import VerifyPhone from "../pages/VerifyPhone"
import PhoneStatus from "../pages/PhoneStatus"
import Buy from "../pages/Buy"
import Profile from "../pages/Profile"
import Identity from "../pages/Identity"
import ContentOne from "pages/Blog/ContentOne";

const userRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
  { path: "/identity", component: Identity },
  { path: "/news", component: BlogList },
  { path: "/bitcoin-btc-price-prediction-for-june-2023", component: ContentOne },
  { path: "/buy", component: Buy },
  { path: "/verify-phone", exact: true, component: () => <VerifyPhone /> },
  { path: "/phone-status", exact: true, component: () => <PhoneStatus/> },
  { path: "/verify-email/:id", exact: true, component: () => <VerifyEmail /> },
  { path: "/verify-email-status/:id", exact: true, component: () => <VerifyEmailStatus /> },
  { path: "/", component: HomePage },
  
]

export { userRoutes, authRoutes }
