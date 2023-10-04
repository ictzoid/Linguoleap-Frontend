const SecButton = ({ text, buttonType = "" }) => {
  return (
    <div>
      {buttonType === "ring" ? (
        <button
          className={`w-full p-2 rounded-md text-primaryColor btn-res text-center border border-primaryColor bg-transparent`}
        >
          {text ?? "Hello world"}
        </button>
      ) : (
        <button
          className={`w-full p-2 rounded-md text-white btn-res text-center bg-primaryColor`}
        >
          {text ?? "Hello world"}
        </button>
      )}
    </div>
  );
};

export default SecButton;
