import { Routes, Route } from "react-router-dom";
import LoginScreen from "../pages/AuthScreens/LoginScreen";
import SignUpScreen from "../pages/AuthScreens/SignUpScreen";
import EmailVerificationScreen from "../pages/AuthScreens/EmailVerificationScreen";
import EmailVerificationPage2 from "../pages/AuthScreens/EmailVerificationpage2";
import EmailVerificationPage3 from "../pages/AuthScreens/EmailVerificationPage3";
import VerifiedPage from "../pages/AuthScreens/VerifiedPage";
import ForgetPasswordScreen from "../pages/AuthScreens/ForgetPasswordScreen";
import ResetPasswordScreen from "../pages/AuthScreens/ResetPasswordScreen";
// import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route
          path="/emailVerification"
          element={<EmailVerificationScreen />}
        />
        <Route
          path="/emailverification2"
          element={<EmailVerificationPage2 />}
        />
        <Route
          path="/emailVerification3"
          element={<EmailVerificationPage3 />}
        />
        <Route path="/verified" element={<VerifiedPage />} />
        <Route path="/forgetPassword" element={<ForgetPasswordScreen />} />
        <Route path="/resetPassword" element={<ResetPasswordScreen />} />
      </Routes>
    </div>
  );
};

export default Router;
