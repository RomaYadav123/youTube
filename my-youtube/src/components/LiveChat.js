import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMesssage, setLiveMessage] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API POlling here
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "$",
        })
      );
    }, 1000);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>

      <form
        className=" flex w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Roma",
              message: liveMesssage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          className="w-[80%]"
          type="text"
          value={liveMesssage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
