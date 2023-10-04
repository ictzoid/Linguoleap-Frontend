const Input = ({
  type,
  placeholder,
  status = "valid",
  icon,
  idFor,
  labelTxt,
}) => {
  return (
    <div>
      {type == "search" || type == "password" ? (
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder ?? "placeholder"}
            className={`w-full p-2 rounded-lg border ${
              status == "invalid"
                ? "border-inputError"
                : status == "valid"
                ? "border-inputSuccess"
                : "border-inputGrey"
            } focus:outline-none focus:shadow-md active:outline-none focus:placeholder:text-blackNeutral disabled:inputGrey placeholder:text-secInputGrey`}
            id={idFor}
          />
          <div className=" absolute top-0 bottom-0 right-0 grid place-items-center p-2">
            {icon ? <img src={icon} alt="" className="w-6" /> : "(- {:{) -)"}
          </div>
        </div>
      ) : (
        <>
          <label
            htmlFor={idFor}
            className="text-inputGrey font-normal leading-5 font-lexend"
          >
            {" "}
            {labelTxt ?? "Label"}
          </label>
          <div className="relative">
            <input
              type={type}
              placeholder={placeholder ?? "placeholder"}
              className={`w-full p-2 rounded-lg border ${
                status == "invalid"
                  ? "border-inputError"
                  : status == "valid"
                  ? "border-inputSuccess"
                  : "border-inputGrey"
              } focus:outline-none focus:shadow-md active:outline-none disabled:inputGrey font-lexend`}
              id={idFor}
            />
            <div className=" absolute top-0 bottom-0 right-0 grid place-items-center p-2">
              {icon ? <img src={icon} alt="" className="w-6" /> : "(- {:{) -)"}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
