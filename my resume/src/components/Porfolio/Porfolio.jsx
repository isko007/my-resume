import React from 'react'
import { NavLink } from 'react-router-dom'
import "./porfolio.scss"

const Porfolio = () => {
  return (
    <div className='Porfolio_container'>
      <div className='Porfolio_about_containeror'>
      <ul>
        <li>
          <h2>
            I'm Ismoil Ibragimov <br/>
            <span>Front-End</span> Developer
          </h2>
        </li>
        <li>
          <p>Hello, my name is Ibragimov Ismoil, I was born in <span>Uzbekistan</span> in the city of Samarkand. I studied at <span>Najot Talim for 10 months</span> and received a certificate.</p>
        </li>
        <li>
          <NavLink className="about_link" to="">
            HIRE ME  
          </NavLink>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Porfolio