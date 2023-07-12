import React, { useEffect, useRef, useState } from "react"
// //Import Scrollbar
import SimpleBar from "simplebar-react"
// MetisMenu
import MetisMenu from "metismenujs"
import { Link } from "react-router-dom"

const SidebarContent = () => {
  const ref = useRef()
  const hospitalRole = JSON.parse(localStorage.getItem("hospitalRole"));
  const userData = JSON.parse(localStorage.getItem("user"));
  const hospitalId = localStorage.getItem("hospitalId");
  const [menuType, setMenuType] = useState(
    localStorage.getItem("menuType") || "0"
  );
  const [role] = useState(hospitalRole && hospitalRole.role);
  const listMenu = role && role.menu && role.menu.items && role.menu.items;
  const pathUrl = window.location.pathname;
  useEffect(() => {
    const pathName = window.location.pathname
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [window.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  const hasChildren = (item) => {
    const { items: children } = item;
    if (children === undefined) {
      return false;
    }
    if (children.constructor !== Array) {
      return false;
    }
    if (children.length === 0) {
      return false;
    }
    return true;
  };

  const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  
    return <Component item={item} />;
  };
  
  const SingleLevel = ({ item }) => {
    return (
      <>
        {item.active === "1" ? (
          <>
          <li>
            <Link to={"/"+item.slug} className="waves-effect">
              <i className="ti-mobile"></i>
              <span>{item.name}</span>
            </Link>
          </li>
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  
  const MultiLevel = ({ item }) => {
    const { items: children } = item;
  
    return (
      <React.Fragment>
        <>
          <li key={item.name}>
            <Link to={"/"+item.slug} className="has-arrow waves-effect">
              <i className="ti-comments"></i>
              <span>{item.name}</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              {children.map((child, key) =>
                child.active === "1" ? (
                  <li key={key}>
                    <Link to={"/"+child.slug} className="link_name">{child.name}</Link>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </li>
          </>
          
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{"Main"} </li>
            {listMenu && listMenu.map((item, key) => <MenuItem key={key} item={item} />)}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

export default SidebarContent
