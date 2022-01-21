import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, font, RightIcon, highlighted }) => {
  return (
    <div className="sidebaroption__main">
      <div
        className={`sidebaroption__left ${
          highlighted ? "highlightedText" : "nothighlightedText"
        }`}
      >
        {Icon && <Icon fontSize={font} style={{ padding: 10 }} />}
        {Icon ? <h3>{title}</h3> : ""}
      </div>
      <div
        className={`sidebaroption__right ${
          highlighted ? "highlightedText" : "nothighlightedText"
        }`}
      >
        {RightIcon && <RightIcon fontSize={font} style={{ padding: 10 }} />}
      </div>
    </div>
  );
};

export default SidebarOption;
