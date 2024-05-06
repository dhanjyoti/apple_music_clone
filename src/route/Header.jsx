import React, { useState } from "react";
import Popup from "../components/Popup";
import Subscription from "./Subscription";
import "./header.css";

const Header = () => {
  const [showSubscribe, setShowSubscribe] = useState("");
  return (
    <div className="headerDiv">
      <div className="topBar">
        <button
          className="subscribeButton"
          onClick={() => {
            setShowSubscribe(true);
          }}
        >
          Subscribe
        </button>
      </div>
      <Popup
        show={showSubscribe}
        onClose={() => {
          setShowSubscribe(false); // if this onClose is not passed it will not work for the second time
        }}
      >
        <Subscription />
      </Popup>
    </div>
  );
};

export default Header;
