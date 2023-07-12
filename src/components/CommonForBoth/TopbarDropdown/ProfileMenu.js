import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import Swal from "sweetalert2";
//i18n
import { withTranslation } from "react-i18next"
import { Link, useHistory } from "react-router-dom"

// users
import user1 from "../../../assets/images/users/user-4.jpg"

const ProfileMenu = () => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)
  const handleLogout = () => {
    localStorage.clear();
    Swal.fire({
      icon: "success",
      text: "You have been logged out!",
      background: '#23262f',
      confirmButtonColor: "#f27474", 
      color: '#fff'
    });
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {"Profile"}{" "}
          </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            {"Veirification Email"}
          </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            {"Veirification Phone"}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link onClick={() => {
              handleLogout();
            }} className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{"Logout"}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default  ProfileMenu
