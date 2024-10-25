import React from 'react'
import { FaFacebookF , FaInstagram , FaTelegramPlane, FaLinkedinIn   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import './about.scss'

const About = () => {
  return (
    <div className='About_container'>
        <div>
        <ul className='About_list'>
            <li>
                <img src="https://decotvframes.com/cdn/shop/products/SA1035_w_650x.jpg?v=1637669731" alt="" />
            </li>
            <li>
                <h2>Ismoil Ibragimov</h2>
            </li>
            <li>
                <p>Front-End Developer</p>
            </li>
            <ul className='About_list_web_programers'>
            <li className='about_iytem_link_desing'>
              <NavLink className="About_web_link" to="" target="_blank">
                 <i>
                  <FaFacebookF/>
                  </i> 
              </NavLink>
          </li>
          <li className='about_iytem_link_desing'>
              <NavLink className="About_web_link" to="" target="_blank">
                 <i>
                  <FaInstagram/>
                  </i>
              </NavLink>
          </li>
          <li className='about_iytem_link_desing'>
              <NavLink className="About_web_link" to="" target="_blank">
                  <i>
                    <FaTelegramPlane/>
                  </i>
              </NavLink>
          </li>
          <li className='about_iytem_link_desing'>
              <NavLink className="About_web_link" to="" target="_blank">
                  <i>
                    <FaLinkedinIn/>
                  </i>
              </NavLink>
          </li>
          <li className='about_iytem_link_desing'>
              <NavLink className="About_web_link" to="" target="_blank">
                  <i>
                    <FaXTwitter/>
                  </i>
              </NavLink>
          </li>
            </ul>
            <span></span>
        </ul>
        </div>
        <div className='about_contac_container'>
            <ul className='about_contac_list'>
                <li className='about_contac_info_item'>
                    <h3>Age:</h3>
                    <p>16</p>
                </li>
                <li className='about_contac_info_item'>
                    <h3>Residence:</h3>
                    <p>Junior</p>
                </li>
                <li className='about_contac_info_item'>
                    <h3>Address:</h3>
                    <p>Uzbekistan,Tashkent</p>
                </li>
                <span></span>
            </ul>
        </div>
        <div>
            <ul className='Languages_list'>
                <h1>Languages</h1>
                <li className='Languages_list_item'>
                    <li className='Languages_list_item_prozent'>
                    <p>Eng</p>
                    <p>90%</p>
                    </li>
                       <span className='Languages_item_90_prosent'></span>
                       <span className='Languages_item_10_prosent'></span>
                </li>
                <li className='Languages_list_item'>
                    <li className='Languages_list_item_prozent'>
                    <p>Rus</p>
                    <p>90%</p>
                    </li>
                      <span className='Languages_item_90_prosent'></span>
                      <span className='Languages_item_10_prosent'></span>
                </li>
                <li className='Languages_list_item'>
                    <li className='Languages_list_item_prozent'>
                    <p>Uzb</p>
                    <p>100%</p>
                    </li>
                       <span className='Languages_item_100_prosent'></span>
                </li>
                <li className='Languages_list_item'>
                    <li className='Languages_list_item_prozent'>
                    <p>Tjk</p>
                    <p>90%</p>
                    </li>
                       <span className='Languages_item_90_prosent'></span>
                       <span className='Languages_item_10_prosent'></span>
                </li>
                <span className='span'></span>
            </ul>
        </div>
        <div>
        <ul className='Skills_list'>
                <h1>Skills</h1>
                <li className='Skills_list_item'>
                    <li className='Skills_list_item_prozent'>
                    <p>Html</p>
                    <p>90%</p>
                    </li>
                       <span className='Skills_item_90_prosent'></span>
                       <span className='Skills_item_10_prosent'></span>
                </li>
                <li className='Skills_list_item'>
                    <li className='Skills_list_item_prozent'>
                    <p>css, scss</p>
                    <p>95%</p>
                    </li>
                      <span className='Skills_item_95_prosent'></span>
                      <span className='Skills_item_10_prosent'></span>
                </li>
                <li className='Skills_list_item'>
                    <li className='Skills_list_item_prozent'>
                    <p>js</p>
                    <p>75%</p>
                    </li>
                       <span className='Skills_item_75_prosent'></span>
                </li>
                <li className='Skills_list_item'>
                    <li className='Skills_list_item_prozent'>
                    <p>React</p>
                    <p>85%</p>
                    </li>
                       <span className='Skills_item_85_prosent'></span>
                       <span className='Skills_item_10_prosent'></span>
                </li>
                <li className='Skills_list_item'>
                    <li className='Skills_list_item_prozent'>
                    <p>Tailwind css</p>
                    <p>90%</p>
                    </li>
                       <span className='Skills_item_90_prosent'></span>
                       <span className='Skills_item_10_prosent'></span>
                </li>
                <li className='Skills_list_item'>
                    <li className='Skills_list_item_prozent'>
                    <p>Next js</p>
                    <p>80%</p>
                    </li>
                       <span className='Skills_item_80_prosent'></span>
                       <span className='Skills_item_10_prosent'></span>
                </li>
                <span className='span'></span>
            </ul>
        </div>
        <div>
            <ul className='Extra_skills_list'>
                <h1>Extra Skills</h1>
                <li className='Extra_skills_list_item'>
                    <p>Boostrap</p>
                </li>
                <li className='Extra_skills_list_item'>
                    <p>Netlify, Vercel</p>
                </li>
                <li className='Extra_skills_list_item'>
                    <p>GitHube</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About