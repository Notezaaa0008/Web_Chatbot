import React from "react";
import "./chatBot.css";
import Widget from "rasa-webchat";
import logo from "../img/logo-ptt.png";

export const ChatBot = props => {
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      try {
        document.querySelector(".rw-send").click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  // const handleViwe

  return (
    <div style={{ height: "92.5vh" }} onKeyDown={handleKeyDown}>
      <Widget
        initPayload={"/greet"}
        socketUrl={"http://localhost:5005"}
        socketPath={"/socket.io/"}
        customData={{ language: "en", fullName: `${props.graphData.givenName} ${props.graphData.surname}` }} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"PTT BOT"}
        showMessageDate={true}
        onSocketEvent={{
          bot_uttered: e => console.log(e.text),
          connect: () => console.log("connection established")
        }}
        profileAvatar={logo}
        params={
          {
            // // clear localStorage
            // storage: localStorage.clear()
          }
        }
        inputTextFieldHint={"What's in your mind?..."}
        embedded={true}
        // docViewer={true}
      />
    </div>
  );
};
