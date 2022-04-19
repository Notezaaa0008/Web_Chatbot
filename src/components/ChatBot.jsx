import React, { useEffect, useState } from "react";
import "./chatBot.css";
import Widget from "rasa-webchat";
import logo from "../img/logo-ptt.png";

export const ChatBot = props => {
  const [viewImg, setViewImg] = useState(false);
  const [Image, setImage] = useState("");
  let listImg = [];

  useEffect(() => {
    setTimeout(() => addEventToImg(), 2000);
  }, []);

  const addEventToImg = () => {
    let elementImg = document.getElementsByClassName("rw-image-frame");
    for (let i = 0; i < elementImg.length; i++) {
      elementImg[i].addEventListener("click", e => handleViewImg(e));
    }

    for (let j = 0; j < listImg.length; j++) {
      listImg.pop();
    }
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      try {
        document.querySelector(".rw-send").click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleViewImg = e => {
    e.preventDefault();
    setImage(e.target.currentSrc);
    setViewImg(true);
  };

  const handleClose = e => {
    e.preventDefault();
    setViewImg(false);
  };

  return (
    <div style={{ height: "92.5vh" }} onKeyDown={handleKeyDown}>
      {/* widget chat */}
      <Widget
        initPayload={"/greet"}
        socketUrl={"http://localhost:5005"}
        socketPath={"/socket.io/"}
        customData={{ language: "en", fullName: `${props.graphData.givenName} ${props.graphData.surname}` }} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"OGC Smart Chatbot"}
        showMessageDate={true}
        onSocketEvent={{
          bot_uttered: e => {
            console.log(e.attachment);
            if (e.attachment) {
              listImg.push(e.attachment);
              // set timeout response
              setTimeout(() => addEventToImg(), (listImg.length + 1.5) * 1000);
            }
            console.log(listImg.length);
          },
          connect: () => console.log("connection established")
        }}
        profileAvatar={logo}
        inputTextFieldHint={"What's in your mind?..."}
        embedded={true}
        docViewer={true}
      />
      {/* popup image */}
      {viewImg && (
        <div className="popup-img">
          <div>
            <div>
              <a className="close-img" onClick={handleClose}>
                &#10060;
              </a>
            </div>
            <div>
              <img className="popup-inner-img" src={Image}></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
