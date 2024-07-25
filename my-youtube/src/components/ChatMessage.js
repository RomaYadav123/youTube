import smileyLogo from "./images/smiley-logo.jpg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg">
      <img
        alt="smiley-logo"
        src={smileyLogo}
        className="w-11 h-11 rounded-full"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
