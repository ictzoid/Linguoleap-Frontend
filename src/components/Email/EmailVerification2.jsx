import React from "react";
import Logo from "../../assets/images/Logo.svg";
import email_unchecked from "../../assets/images/email_unchecked.png";

const EmailVerification2 = () => {
  return (
    <>
      <div className="hidden md:p-[73px] md:block md:absolute md:top-0 md:left-0">
        <img src={Logo} alt="" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center gap-2">
        <img src={email_unchecked} />
        <span>
          An email has been sent to “usermail@gmail.com”. Click on the link in
          your email to complete your registration.
        </span>
        <h4 className="text-sm text-center">
          If you did not get any email,{" "}
          <p className="text-primaryColor"> Resend Verification link</p>
        </h4>
      </div>
      <div className="hidden md:block md:absolute md:bottom-0 md:center-0 ">
        Copyright 2023 <h5 className="text-primaryColor">Langleap </h5>
      </div>
    </>
  );
};

export default EmailVerification2;
