import { useState } from "react";
import SecButton from "../../components/Buttons/SecButton";
import Input from "../../components/Input/Input";
import logo from "../../assets/images/logo_purple.png";
import emailUnread from "../../assets/images/email_unchecked.png";
import emailRead from "../../assets/images/email_checked.png";

const ForgetPasswordScreen = () => {
  const [isPassReset, setPassReset] = useState(false);
  return (
    <div className=" h-screen flex justify-center items-center">
      <img
        src={logo}
        alt="linguoleap logo"
        className="hidden sm:block absolute top-10 left-10 w-28"
      />
      {!isPassReset && (
        <div className="w-3/4 sm:w-1/2 sm:mb-10 lg:w-threeSixSixPx flex flex-col gap-5 ">
          <img
            src={emailUnread}
            alt="email icon"
            className="w-8 sm:w-16 lg:w-24 self-center"
          />
          <h3 className="h3-res text-primaryColor text-center px-2 font-semibold">
            Forgot Password
          </h3>
          <p className="text-center text-secInputGrey p-res">
            Enter your email address to reset password. A password reset email
            will be sent to you shortly.
          </p>
          <Input
            type="email"
            placeholder={"Enter Your Email Address"}
            status={"def"}
            labelTxt={"Email Address"}
          />
          <div onClick={() => setPassReset(true)}>
            <SecButton text={"Verify email"} />
          </div>

          <p className="text-center text-primaryColor p-res">Back To Login</p>
        </div>
      )}
      {/*  */}

      {/*  */}
      {isPassReset && (
        <div className="w-3/4 sm:w-1/2 sm:mb-10 lg:w-96  flex flex-col gap-5 ">
          <img
            src={emailRead}
            alt="email icon"
            className="w-8 sm:w-16 lg:w-24 self-center"
          />
          <h3 className="h3-res text-primaryColor text-center px-2 font-semibold">
            Check your Email
          </h3>
          <p className="text-center text-secInputGrey p-res">
            We have sent you a reset password email. Kindly check your email and
            follow the instructions to reset your password.
          </p>

          <SecButton text={"Open Email"} buttonType={"ring"} />

          <p className=" flex justify-center flex-wrap gap-1 text-center text-inputGrey p-res">
            Didn&apos;t receive an email?{" "}
            <span className="text-primaryColor p-res">Resend link</span>
          </p>
        </div>
      )}
      <p className="hidden sm:block absolute bottom-8 text-inputGrey">
        &copy; Copyright 2023{" "}
        <span className="text-primaryColor">Langleap</span>
      </p>
    </div>
  );
};

export default ForgetPasswordScreen;
