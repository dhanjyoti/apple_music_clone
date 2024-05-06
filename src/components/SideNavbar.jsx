import React from "react";
import TextComponent from "./TextComponent";
import PlayIcon from "../icons/playIcon";
import Browse from "../icons/browseIcon";
import Radio from "../icons/radioIcon";
import MusicIcon from "../icons/musicIcon";
import LogoIcon from "../icons/logoIcon";
import './sideNavbar.css';
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
      <div className="leftSidebarContainer">
        <div className="sidebarContainer">
          <div>
            {/* <img className='logoIcon' src={AppleMusicLogo} alt='Logo'/> */}
            <LogoIcon />
          </div>
          <div>
            <input type="search" placeholder="Search" />
          </div>
          <div className="iconDiv">
            <NavLink style={{textDecoration:"none"}} to="/">
              <TextComponent icon={<PlayIcon />} text="Listen Now" />
            </NavLink>
            <NavLink style={{textDecoration:"none"}} to="./browser">
              <TextComponent icon={<Browse />} text="Browse" />
            </NavLink>
            <NavLink style={{textDecoration:"none"}} to="">
              <TextComponent icon={<Radio />} text="Radio" />
            </NavLink>
          </div>
        </div>
        {/* Horizontal line */}
        <div className="sidebarContainer">
          <TextComponent icon={<MusicIcon />} text="Open in Music" />
        </div>
      </div>
  );
};

export default SideNavbar;
