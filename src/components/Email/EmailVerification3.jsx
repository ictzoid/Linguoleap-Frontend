import React from "react";
import SecButton from "../Buttons/SecButton";
import Logo from "../../assets/images/Logo.svg";

const EmailVerification3 = () => {
  return (
    <>
      <div className="hidden md:p-[73px] md:block md:absolute md:top-0 md:left-0">
        <img src={Logo} alt="" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center gap-2">
        <span className="">Lingoleap Logo</span>
        <h4 className="text-sm text-center">
          Hi User, Thank you for signing up to
          <p className="text-primaryColor">Lingoleap</p>
        </h4>
        <h5>
          Please confirm your email address by clicking on the verify email
          button below
        </h5>
        <SecButton buttonType="submit" text="Verify your email" />
        <h6>
          You received this email because you created an account with our
          website <p className="text-primaryColor">unsubscribe</p>
        </h6>
      </div>
      <div className="hidden md:block md:absolute md:bottom-0 md:center-0">
        Copyright 2023 <h5 className="text-primaryColor">Langleap </h5>
      </div>
    </>
  );
};

export default EmailVerification3;
