import "./App.css";
import React from "react";
import FullName from "./component/Profile/FullName";
import ProfilePhoto from "./component/Profile/ProfilePhoto";
import Address from "./component/Profile/Address";

    function App() {
      return (
        <div className="App">
          <FullName></FullName>
          <ProfilePhoto></ProfilePhoto>
          <Address></Address>
        </div>
      );
    }
export default App;

