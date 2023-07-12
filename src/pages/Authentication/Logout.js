import React, { useEffect } from "react"

const Logout = () => {
  useEffect(() => {
    localStorage.clear();
    let defaultPage = "/login";
    window.location = defaultPage;
  })

  return <></>
}


export default Logout
