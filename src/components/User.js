import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"


function User() {
  return (
    <div className="user">
      
      <h1 className="user__name">Sidi El Moctar ELWERIE</h1>
      <p className="user__profession">product Owner Intern</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 67 avenue pablo picasso 92000 Nanterre
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33669613770">0669613770</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:sidiwerie@gmail.com">sidiwerie@gmail.com</a>
        </p>
       
      </div>
    </div>
  )
}

export default User
