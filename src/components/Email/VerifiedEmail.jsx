import React from "react";
import SecButton from "../Buttons/SecButton";
import Logo from "../../assets//images/Logo.svg";
import Verified from "../../assets/images/verified.svg";

const VerifiedEmail = () => {
  return (
    <>
      <div className="hidden md:p-[73px] md:block md:absolute md:top-0 md:left-0">
        <img src={Logo} alt="" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center gap-2">
        <img src={Verified} alt="" />
        <p className="text-primaryColor">Verified</p>
        <h4 className="text-sm text-center">
          You have successfully verified your email
        </h4>
        <SecButton buttonType="submit" text="Go to dashboard" />
      </div>
      <div className="hidden md:block md:absolute md:bottom-0 md:center-0">
        Copyright 2023 <h5 className="text-primaryColor">Langleap </h5>
      </div>
    </>
  );
};

export default VerifiedEmail;
