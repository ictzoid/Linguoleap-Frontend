const Message = ({ text }) => {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      className="w-full p-2 border border-inputGrey rounded-fourPx focus:border-blackNeutral focus:outline-none text-base font-normal leading-5 font-montserrat"
    >
      {text ??
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo eos architecto adipisci, deserunt et in ab voluptatem iusto dolorum! Dicta?"}
    </textarea>
  );
};

export default Message;
