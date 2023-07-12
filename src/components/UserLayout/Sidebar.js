import React, { useState } from "react"
import SidebarContent from "./SidebarContent"

const Sidebar = () => {
  const [type, setType] = useState("condensed")

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar
