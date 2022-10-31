import React from 'react';
import { Link } from 'react-router-dom';
import styleCard from './Cards.module.scss';


const Cards = ({ results, page } ) => {
  
  let display;
  console.log(results)
  if(results){
    display = results.map((x)=>{
      let {id, name, image, location, status} = x;
      return (
        <Link 
          style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id} 
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styleCard.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${styleCard.img} img-fluid`} />
            <div style={{padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{   //se crea la Funcion en IIFE par que se autoinvoque
            if(status === "Dead"){
              return(
                <div className={`${styleCard.badge} position-absolute badge bg-danger`} >{status}
                </div>
              )
            }
            else if(status === "Alive"){
              return(
                <div className={`${styleCard.badge} position-absolute badge bg-success`} >{status}
                </div>
              )
            }
            else{
              return(
                <div className={`${styleCard.badge} position-absolute badge bg-secondary`} >{status}
                </div>
              )
            }
          })()}
          
        </Link>
      )
    });
  }else{
    display = "Not Found :/"
  }

  return (
    <>{display}</>
  )
}

export default Cards
