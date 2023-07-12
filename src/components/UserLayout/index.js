import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
const UserLayout = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
      <React.Fragment>
        <div id="UserLayoutLayout-wrapper">
          <Header/>
          <div className="user-content">{props.children}</div>
          <Footer />
        </div>
      </React.Fragment>
    )
}

export default UserLayout;
