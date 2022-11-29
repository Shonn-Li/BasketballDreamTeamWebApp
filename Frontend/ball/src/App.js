import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./Pages/Auth/LoginReg";
import ResetPassword from "./Pages/Auth/ResetPassword";
import SendPasswordResetEmail from "./Pages/Auth/SendPasswordResetEmail";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Intro from "./Pages/Intro";
import { useSelector } from "react-redux";
function App() {
 const { access_token } = useSelector((state) => state.auth);
 return (
  //   <>
  //    <BrowserRouter>
  //     <Routes>
  //      <Route path="/" element={<Intro />}>
  //       <Route index element={<Intro />} />
  //       <Route path="contact" element={<Contact />} />
  //       <Route
  //        path="login"
  //        element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
  //       />
  //       <Route
  //        path="sendpasswordresetemail"
  //        element={<SendPasswordResetEmail />}
  //       />
  //       <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
  //      </Route>
  //      <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
  //     </Routes>
  //    </BrowserRouter>
  //   </>
  <Routes>
   <Route path="/" element={<Intro />} />
   <Route path="home/" element={<Home />} />
  </Routes>
 );
}

export default App;
