import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./Pages/Auth/LoginReg";
import ResetPassword from "./Pages/Auth/ResetPassword";
import SendPasswordResetEmail from "./Pages/Auth/SendPasswordResetEmail";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Intro from "./Pages/Intro";
import Main from "./Pages/Main";
import { useSelector } from "react-redux";
function App() {
 const { access_token } = useSelector((state) => state.auth);
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route
       path="login"
       element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
      />
      <Route
       path="sendpasswordresetemail"
       element={<SendPasswordResetEmail />}
      />
      <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
     </Route>
     <Route
      path="/dashboard"
      element={access_token ? <Dashboard /> : <Navigate to="/login" />}
     />
     <Route path="/main" element={<Main />} />
     <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
    </Routes>
   </BrowserRouter>
  </>
  //   <>
  //    <BrowserRouter>
  //     <Route path="/" element={<Intro />} />
  //     <Route path="/start" element={<Layout />}>
  //      <Route index element={<Home />} />
  //      <Route path="contact" element={<Contact />} />
  //      <Route
  //       path="login"
  //       element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
  //      />
  //     </Route>
  //    </BrowserRouter>
  //   </>
 );
}

export default App;
