import React from "react";
import "./Contact.css";
import phone from "../../Images/phone-icon.png";
import mail from "../../Images/mail-icon.png";

const Contact = (props) => {
  console.log(props);
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phone} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} />
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Contact;
