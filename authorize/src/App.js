import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components/admin";
import { useLocation } from "react-router-dom";

// import OwlCarousel from "./pages/Modules/OwlCarousel";
// import Sparkline from "./pages/Modules/Sparkline";
// import SweetAlert from "./pages/Modules/SweetAlert";
// import Toastr from "./pages/Modules/Toastr";
// import VectorMap from "./pages/Modules/VectorMap";
// import WeatherIcon from "./pages/Modules/WeatherIcon";
// import Subscribe from "./pages/Pages/Utilities/Subscribe";
// import Contact from "./pages/Pages/Utilities/Contact";
// import Invoice from "./pages/Pages/Utilities/Invoice";
// import TransparentSidebar from "./pages/Strater/TransparentSidebar";
// import Profile from "./pages/Pages/Features/Profile";
// import SettingDetail from "./pages/Pages/Features/SettingDetail";
// import Settings from "./pages/Pages/Features/Settings";
// import Tickets from "./pages/Pages/Features/Tickets";
// import Calender from "./pages/Modules/Calender";
// import Chart from "./pages/Modules/Chart";
// import DataTables from "./pages/Modules/DataTables";
// import Flag from "./pages/Modules/Flag";
// import FontAwesome from "./pages/Modules/FontAwesome";
// import IonIcons from "./pages/Modules/IonIcons";
// import Error403 from "./pages/Pages/Errors/403";
// import Error404 from "./pages/Pages/Errors/404";
// import Error500 from "./pages/Pages/Errors/500";
// import Error503 from "./pages/Pages/Errors/503";
// import Activities from "./pages/Pages/Features/Activities";
// import PostCreate from "./pages/Pages/Features/PostCreate";
// import Posts from "./pages/Pages/Features/Posts";


import Dashboard from "./pages/Dashboard/Dashboard";
import DefaultLayoutPage from "./pages/Strater/DefaultLayoutPage";
import CompMultipleupload from "./pages/Components/CompMultipleupload";
import CompTab from "./pages/Components/CompTab";
import CompTable from "./pages/Components/CompTable";
import FormValidation from "./pages/Forms/FormValidation";
import FormEditor from "./pages/Forms/FormEditor";
import FormAdvancedform from "./pages/Forms/FormAdvancedform";
import ForgotPassword from "./pages/Pages/Auth/ForgotPassword";
import Login from "./pages/Pages/Auth/Login";
import ResetPassword from "./pages/Pages/Auth/ResetPassword";
import AdminState from './context/auth/AdminState';

import AboutusState from './context/common/Aboutus/AboutusState';
import Aboutus from "./pages/clientPages/Aboutus/Aboutus";
import ContactusState from './context/common/Contact/ContactusState';
import Contactus from "./pages/clientPages/Contactus/Contactus";
import PrivacyState from './context/common/Privacy/PrivacyState';
import Privacy from "./pages/clientPages/Privacy/Privacy";
import TermsState from './context/common/Terms/TermsState';
import Terms from "./pages/clientPages/Terms/Terms";
import BannerState from './context/common/Banner/BannerState';
import Banner from "./pages/clientPages/Banner/Banner";
import GalleryState from './context/common/Gallery/GalleryState';
import Gallery from "./pages/clientPages/Gallery/Gallery";
import ClientState from './context/common/Client/ClientState';
import Client from "./pages/clientPages/Client/Client";
import BlogState from './context/common/Blog/BlogState';
import Blog from "./pages/clientPages/Blog/Blog";
import CategoryState from './context/common/Category/CategoryState';
import Category from "./pages/clientPages/Category/Category";
import ReviewState from './context/common/Review/ReviewState';
import Review from "./pages/clientPages/Review/Review";
import SubcategoryState from './context/common/Subcategory/SubcategoryState';
import Subcategory from "./pages/clientPages/Subcategory/Subcategory";
import TeamState from './context/common/Team/TeamState';
import Team from "./pages/clientPages/Team/Team";
import VideoState from './context/common/Video/VideoState';
import Video from "./pages/clientPages/Video/Video";


const DataTables = React.lazy(() => import('./pages/Modules/DataTables'));

const Error403 = React.lazy(() => import('./pages/Pages/Errors/403'));
const Error404 = React.lazy(() => import('./pages/Pages/Errors/404'));
const Error500 = React.lazy(() => import('./pages/Pages/Errors/500'));
const Error503 = React.lazy(() => import('./pages/Pages/Errors/503'));

const Profile = React.lazy(() => import('./pages/Pages/Features/Profile'));
const Settings = React.lazy(() => import('./pages/Pages/Features/Settings'));
const SettingDetail = React.lazy(() => import('./pages/Pages/Features/SettingDetail'));


const history = React.lazy(() => import('./history'));


function App() {
  let location = useLocation().pathname;
  let locationSplit = location.split("/");
  let locationParent = locationSplit[1];

  let WithoutRouter = ["auth", "error", "utilities"];

  // const RenderDataFullScreen = () => {
  //   if (location === "/auth/forget-password") {
  //     return <ForgotPassword />;
  //   } else if (location === "/auth/register") {
  //     return <Register />;
  //   } else if (location === "/auth/reset-password") {
  //     return <ResetPassword />;
  //   } else if (location === "/error/503") {
  //     return <Error503 />;
  //   } else if (location === "/error/403") {
  //     return <Error403 />;
  //   } else if (location === "/error/404") {
  //     return <Error404 />;
  //   } else if (location === "/error/500") {
  //     return <Error500 />;
  //   } else if (location === "/utilities/subscribe") {
  //     return <Subscribe />;
  //   } else if (location === "/utilities/contact") {
  //     return <Contact />;
  //   }
  // };

  return (
    <div className="App">
      <>
        <AdminState>
          <AboutusState>
            <ContactusState>
              <PrivacyState>
                <TermsState>
                  <BannerState>
                    <GalleryState>
                      <ClientState>
                        <BlogState>
                          <CategoryState>
                            <ReviewState>
                              <SubcategoryState>
                                <TeamState>
                                  <VideoState>
                                    {!WithoutRouter.includes(locationParent) ? (
                                      <>
                                        <Header />
                                        <Sidebar />
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    <React.Suspense fallback={<h1>Still Loading…</h1>}>
                                      <Switch history={history}>
                                        <Route path="/" exact component={Dashboard} />
                                        <Route path="/admin-dashboard" exact component={Dashboard} />

                                        <Route path="/layout/default" component={DefaultLayoutPage} />
                                        <Route path="/component/multiple-upload" component={CompMultipleupload} />
                                        <Route path="/component/tab" component={CompTab} />
                                        <Route path="/component/table" component={CompTable} />
                                        <Route path="/form/advance-form" component={FormAdvancedform} />
                                        <Route path="/form/editor" component={FormEditor} />
                                        <Route path="/form/validation" component={FormValidation} />
                                        <Route path="/module/datatables" component={DataTables} />

                                        <Route path="/auth/login" component={Login} />
                                        <Route path="/auth/forget-password" component={ForgotPassword} />
                                        <Route path="/auth/reset-password" component={ResetPassword} />

                                        <Route path="/feature/profile" component={Profile} />
                                        <Route path="/feature/settings" component={Settings} />
                                        <Route path="/feature/setting-detail/*" component={SettingDetail} />


                                        {/* _______ CLIENT SIDE ROUTES _______ */}

                                        <Route path="/clientpages/aboutus/*" component={Aboutus} />
                                        <Route path="/clientpages/blog/*" component={Blog} />
                                        <Route path="/clientpages/category/*" component={Category} />
                                        <Route path="/clientpages/contactus/*" component={Contactus} />
                                        <Route path="/clientpages/privacy/*" component={Privacy} />
                                        <Route path="/clientpages/terms/*" component={Terms} />
                                        <Route path="/clientpages/banner/*" component={Banner} />
                                        <Route path="/clientpages/gallery/*" component={Gallery} />
                                        <Route path="/clientpages/client/*" component={Client} />
                                        <Route path="/clientpages/review/*" component={Review} />
                                        <Route path="/clientpages/subcategory/*" component={Subcategory} />
                                        <Route path="/clientpages/team/*" component={Team} />
                                        <Route path="/clientpages/video/*" component={Video} />

                                        <Route path="*" component={Error404} />
                                        <Route path="/error/503" component={Error503} />
                                        <Route path="/error/403" component={Error403} />
                                        <Route path="/error/503" component={Error500} />
                                      </Switch>
                                    </React.Suspense>
                                    <Footer />
                                  </VideoState>
                                </TeamState>
                              </SubcategoryState>
                            </ReviewState>
                          </CategoryState>
                        </BlogState>
                      </ClientState>
                    </GalleryState>
                  </BannerState>
                </TermsState>
              </PrivacyState>
            </ContactusState>
          </AboutusState>
        </AdminState>
      </>
    </div>
  );
}

export default App;
