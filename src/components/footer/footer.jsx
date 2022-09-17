import React from 'react';
import logoFooter from '../assets/logoFooter.svg';
import './footer.css'



const footer = () => {


  return (
    <footer className='single_column  '>
      <nav className='nav'>
        <div className="join">
          <img src={logoFooter} alt=""  width="130" height="94" />
        </div>

        <div>
          <h3>
            Главная
          </h3>
        </div>
        <div>
          <h3>
            Главная
          </h3>
        </div>
        <div>
          <h3>
            Главная
          </h3>
        </div>
      </nav>
    </footer>
  )
}

export default footer