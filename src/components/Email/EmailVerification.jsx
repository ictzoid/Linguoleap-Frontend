import React from "react";
import SecButton from "../Buttons/SecButton";
import Logo from "../../assets/images/Logo.svg";
const EmailVerification = () => {
  return (
    <>
      <div className="hidden md:p-[73px] md:block md:absolute md:top-0 md:left-0">
        <img src={Logo} alt="" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center gap-2">
        <span>Lingoleap Logo</span>
        <p className="text-primaryColor">Verify your email</p>
        <h4 className="text-sm text-center">
          To complete your sign up and start learning on Lingoleap
        </h4>
        <SecButton buttonType="submit" text="Verify your email" />
      </div>
      <div className="hidden md:block md:absolute md:bottom-0 md:center-0">
        Copyright 2023 <h5 className="text-primaryColor">Langleap </h5>
      </div>
    </>
  );
};

export default EmailVerification;
