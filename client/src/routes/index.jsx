import Home from "../pages/Home";
import Archive from "../pages/Archive";
import Magazine from "../pages/Magazine";
import Reader from "../pages/Reader";
import Article from "../pages/Article";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";

const routes = [
  { path: "/", component: Home, label: "Home" },
  { path: "/archive", component: Archive, label: "Archive" },
  { path: "/magazine/:id?", component: Magazine, label: "Magazine" },
  { path: "/reader/:id?", component: Reader, label: "Reader" },
  { path: "/article/:id", component: Article, label: "Article" },
  { path: "/search", component: Search, label: "Search" },
  { path: "/login", component: Login, label: "Login" },
  { path: "/register", component: Register, label: "Register" },
  { path: "/about", component: About, label: "About" },
  { path: "/contact", component: Contact, label: "Contact" },
  { path: "/profile", component: Profile, label: "Profile" },
  { path: "/admin", component: Admin, label: "Admin" },
];

export default routes;
