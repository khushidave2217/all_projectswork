import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Popup.css";

const AuthPopup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); 
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {show && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Welcome!</h2>
            <p>Please Login or Register to continue</p>

            <button className="btn" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="btn" onClick={() => navigate("/register")}>
              Register
            </button>

            <span className="close-btn" onClick={() => setShow(false)}>
              X
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPopup;
