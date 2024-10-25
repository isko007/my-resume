import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiHome2Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import "./Nav.scss"

const Div = () => {
  return (
    <div className='Nav_container'>
      <div className='Nav_children_container'>
        <ul className='Nav_list'>
          <li className='nav_iytem_link_desing'>
              <NavLink className="Nav_link" to="">
                 <i>
                   <small>Mode</small>
                  <MdDarkMode/>
                  </i> 
              </NavLink>
          </li>
          <li className='nav_iytem_link_desing'>
              <NavLink className="Nav_link" to="">
                 <i>
                  <small>Home</small>
                  <RiHome2Fill/>
                  </i>
              </NavLink>
          </li>
          <li className='nav_iytem_link_desing'>
              <NavLink className="Nav_link" to="">
                  <i>
                    <small>Sites</small>
                    <TbWorld/>
                  </i>
              </NavLink>
          </li>
          <li className='nav_iytem_link_desing'>
              <NavLink className="Nav_link" to="">
                  <i>
                    <small>Language</small>
                    <IoLanguage/>
                  </i>
              </NavLink>
          </li>
          <li className='nav_iytem_link_desing'>
              <NavLink className="Nav_link" to="https://drive.google.com/uc?export=download&id=1GZkuSt3r-XtP071snB15g3Lau2FgP4_O" target="_blank">
                 <i> 
                   <small>Download</small>
                  <FaFileDownload/>
                </i>
              </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Div