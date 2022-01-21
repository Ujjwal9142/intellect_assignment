import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import CallToActionRoundedIcon from "@mui/icons-material/CallToActionRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import TuneIcon from "@mui/icons-material/Tune";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Sidebar = () => {
  return (
    <div className="sidebar__main">
      <div className="sidebar__header">
        <h3>Create New</h3>
      </div>
      <div className="sidebar__body1">
        <SidebarOption
          Icon={DashboardIcon}
          title="Dashboard"
          RightIcon={ChevronRightIcon}
          font="small"
          highlighted
        />
        <SidebarOption
          Icon={TuneIcon}
          title="Sidebar Type"
          RightIcon={ChevronRightIcon}
          font="small"
        />
        <SidebarOption
          Icon={ContentCopyIcon}
          title="Page Layouts"
          RightIcon={ChevronRightIcon}
          font="small"
        />
      </div>
      <div className="sidebar__body2">
        <SidebarOption
          Icon={MoveToInboxIcon}
          title="Inbox"
          RightIcon={ChevronRightIcon}
          font="small"
        />
        <SidebarOption
          Icon={BookmarkAddOutlinedIcon}
          title="Ticket"
          RightIcon={ChevronRightIcon}
          font="small"
        />
        <SidebarOption
          Icon={KeyboardIcon}
          title="Extra"
          RightIcon={ChevronRightIcon}
          font="small"
        />
      </div>
      <div className="sidebar__body3">
        <SidebarOption
          Icon={GridViewIcon}
          title="Ui Elements"
          RightIcon={ChevronRightIcon}
          font="small"
        />
        <SidebarOption
          Icon={CallToActionRoundedIcon}
          title="Cards"
          RightIcon={ChevronRightIcon}
          font="small"
        />
        <SidebarOption
          Icon={CallToActionRoundedIcon}
          title="Components"
          RightIcon={ChevronRightIcon}
          font="small"
        />
        <SidebarOption
          Icon={KeyboardIcon}
          title="Widgets"
          RightIcon={ChevronRightIcon}
          font="small"
        />
      </div>
    </div>
  );
};

export default Sidebar;
