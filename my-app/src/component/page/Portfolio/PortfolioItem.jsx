import React, { useState } from 'react';
import '../Portfolio/portfolioitem.css'
// eslint-disable-next-line react/prop-types
import Close from '../../../assets/close.svg'
function PortfolioItem({img,title,details}) {
    const [modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal)
    }
  return (
    <div className='portfolio__item'>
        <img src={img} alt='' className='portfolio__img' />

        <div className="portfolio__hover " onClick={toggleModal}>
            <h3 className="portfolio-hover-title">{title}</h3>
        </div>

       {modal && (
         <div className="portfolio--modal ">
         <div className="portfolio-modal-contentr">
              <img src={Close} alt="" className='modal__close' onClick={toggleModal}/>
              <h3 className="modal__title">{title}</h3>
              <ul className="modal__list">
                 {details.map(({icon,title,desc},index)=>{
                     return(
                         <li className="modal__item" key={index}>
                             <span className='mitem__icon d-flex'>{icon} </span>
                             <div className='modal-all-item'>
                                 <span className='mitem__title'>{title}</span>
                                 <span className='mitem__desc'>{desc}</span>
                                 
                             </div>
                         </li>
                     )
                 })}
              </ul>
              <img src={img} alt='' className='modal-image' />
         </div>
     </div>
       )}
      
    </div>
  )
}

export default PortfolioItem
