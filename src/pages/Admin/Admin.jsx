import React from "react";
import "./Admin.css";
import { AccountProfileDetails } from './account-profile-details';

const Admin = () => {

  

  return (
    <div className="background">
      Admin
      <div className="mainPage">
        Main
        <AccountProfileDetails />
      </div>
    </div>
  );
};

export default Admin;
