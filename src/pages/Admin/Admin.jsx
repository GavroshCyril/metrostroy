import React from "react";
import "./Admin.css";
import { HomeAdmin } from './HomeAdmin';

const Admin = () => {

  

  return (
    <div className="background">
      Admin
      <div className="mainPage">
        Main
        <HomeAdmin />
      </div>
    </div>
  );
};

export default Admin;
