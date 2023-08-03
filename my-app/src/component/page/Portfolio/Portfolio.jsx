// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Portfolio/portfolio.css';
import PortfolioItem from '../Portfolio/PortfolioItem';
import { portfolio } from '../../../data';
function Portfolio() {
  return (
    <section className='portfolio-section container'>
       <h1 className="portfolio__header">My <span>Latest Work:</span></h1>
       <div className="porfolio-grids">
            {portfolio.map((item)=>{
              return <PortfolioItem key={item.id} {...item}  />
            })}
       </div>
    </section>
  )
}

export default Portfolio
