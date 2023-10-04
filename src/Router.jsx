import { Routes, Route } from "react-router-dom";
import LoginScreen from "./AuthScreens/LoginScreen";
import SignUpScreen from "./AuthScreens/SignUpScreen";
import EmailVerificationScreen from "./AuthScreens/EmailVerificationScreen";
import ForgetPasswordScreen from "./AuthScreens/ForgetPasswordScreen";
import ResetPasswordScreen from "./AuthScreens/ResetPasswordScreen";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route
          path="/emailVerification"
          element={<EmailVerificationScreen />}
        />
        <Route path="/forgetPassword" element={<ForgetPasswordScreen />} />
        <Route path="/resetPassword" element={<ResetPasswordScreen />} />
      </Routes>
    </div>
  );
};

export default Router;
